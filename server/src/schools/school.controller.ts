import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import * as School from './school.service';
import { emailVerificationMail, passwordResetMail, sendEmail } from '../shared/util/mail'
import { verifyAccountDetails } from '../shared/util/paystack';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    // If all the checks are successful, hash password and create a new account
    const hashedPassword = await bcrypt.hash(password, 12)
    if (!hashedPassword) {
      res.status(400).json({ error: "An error occured while hashing password" })
      return;
    }

    const school = await School.createSchool({
      email,
      name,
      password: hashedPassword,
      logo: process.env.DEFAULT_IMAGE
    })

    // If school check is successful, generate OTP and set the expiration time
    const random = `${Math.random() * 10 ** 16}`
    const otp = random[3] + random[9] + random[6] + random[12]
    school.otp = +otp 
    school.otpExpiration = Date.now() + (1 * 60 * 60 * 1000)
    await school.save()

    // Send the email verification OTP to the school email address
    const subject = 'Email Verification'
    const emailContent = emailVerificationMail(school)
    await sendEmail(school, subject, emailContent)

    // Create and sign an authentication token that expires in 3 hours
    const token = jwt.sign(
      { id: school._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: '3h' }
    )

    // Send a success message and the token if registration is complete
    res.status(201).json({ message: 'Registration successful!', school, token }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    // If all checks are successful, configure session data for newly logged in school
    const school = await School.getSchoolByEmail(email)
    if (!school) {
      res.status(400).json({ error: "An error occured while fetching school by email address" })
      return;
    }

    // Create and sign an authentication token that expires in 3 hours
    const token = jwt.sign(
      { id: school._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: '3h' }
    )

    // Send a success message and the token if login is complete
    res.status(200).json({ message: 'Login successful', token }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const logout = (req: Request, res: Response) => {
  // Delete and reset session data before logout
  req.session.destroy((err) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }

    res.status(200).json({ message: 'You logged out' })
    return;
  })
}

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    // Find school by email address and return an error if not found
    const school = await School.getSchoolByEmail(email)
    if (!school) {
      res.status(400).json({ error: 'School with that email does not exist' })
      return;
    }

    // If school check is successful, generate OTP and set the expiration time
    const random = `${Math.random() * 10 ** 16}`
    const otp = random[3] + random[9] + random[6] + random[12]
    school.otp = +otp
    school.otpExpiration = Date.now() + (1 * 60 * 60 * 1000)
    await school.save()

    // Send the OTP to the school email address
    const subject = 'Password Reset'
    const emailContent = passwordResetMail(school)
    await sendEmail(school, subject, emailContent)

    // Save the school email address in a session incase the school requests for the OTP to be re-sent
    req.session.email = school.email

    // Notify school that the OTP for password reset has been sent
    res.status(200).json({ message: 'Password reset OTP has been sent to your email' }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { otp } = req.body

    // Check if the OTP is valid
    const school = await School.checkOTP(otp)
    if (!school) {
      res.status(400).json({ error: 'Invalid OTP' })
      return;
    }

    // Check if the OTP has expired
    if (school.otpExpiration < Date.now()) {
      res.status(400).json({ error: 'This OTP has expired. Resend another OTP to your email' })
      return;
    }

    // Reset OTP expiration time if the OTP is valid and save changes
    school.otpExpiration = undefined
    await school.save()

    // Delete session created earlier for storing email and resending OTPs
    req.session.destroy((err) => {
      if (err) { console.log(err) }
    })

    res.status(200).json({ message: "Verification successful!", otp })
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const resendOTP = async (req: Request, res: Response) => {
  try {
    // Check if school exists with the email stored in session
    const school = await School.getSchoolByEmail(req.session.email)
    if (!school) {
      res.status(400).json({ error: 'School not found' })
      return;
    }

    // Generate new OTP, reset the expiration time and save changes
    const random = `${Math.random() * 10 ** 16}`
    const otp = random[3] + random[9] + random[6] + random[12]
    school.otp = +otp
    school.otpExpiration = Date.now() + (1 * 60 * 60 * 1000)
    await school.save()

    const subject: string = 'Password Reset'
    const emailContent: string = passwordResetMail(school)
    await sendEmail(school, subject, emailContent) // Send email with new OTP to school email

    // Notify school that OTP for password reset has been re-sent
    res.status(200).json({ message: 'Another OTP has been sent to your email' }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { otp } = req.query
    const { password } = req.body

    // Send error message if the OTP is invalid
    const school = await School.checkOTP(otp as string)
    if (!school) {
      res.status(400).json({ error: 'Invalid OTP' })
      return;
    }

    // Check if new passowrd matches previous password
    const checkMatch = await bcrypt.compare(password, school.password)
    if (checkMatch) {
      res.status(400).json({ error: 'New password cannot be set to same value as previous password' })
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12) // Generate hash for new password
    if (!hashedPassword) {
      res.status(400).json({ error: "An error occured while hashing password" })
      return;
    }

    // Change school's password, reset the OTP value and save changes
    school.password = hashedPassword
    school.otp = undefined
    await school.save()

    // Notify school if password reset is successful
    res.status(200).send({ message: 'Password has been reset' }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { otp } = req.query

    // Send error message if the OTP is invalid
    const school = await School.checkOTP(otp as string)
    if (!school) {
      res.status(400).json({ error: 'Invalid OTP' })
      return;
    }

    school.otp = undefined // Reset the OTP value after verification
    await school.save()

    res.status(200).send({ message: 'Email verification successful!' }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const getProfile = async (req: Request, res: Response) => {
  try {
    const school = await School.getSchoolById(req.session.school.id)

    res.status(200).json({ school }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const schoolId = req.session.school.id
    let { name, email, address, phone, accountNumber, accountName, bankName, logo } = req.body

    const { verified, unverified } = await verifyAccountDetails(req.body) // Verify the school's account details

    if (!req.file) {
      logo = process.env.DEFAULT_IMAGE // Use a default image if no file is uploaded
    } else {
      logo = req.file.path
    }

    if (verified) {
      const school = await School.updateProfile(schoolId,
        {
          name,
          email,
          logo,
          address,
          phone,
          bankDetails: { accountName, accountNumber, bankName }
        }
      )

      res.status(200).json({ message: "Profile updated successfully", school }).end()
      return;
    } else if (unverified) {
      res.status(422).json({ error: 'Bank verification unsuccessful. Kindly input your account details in the correct order' })
      return;
    }
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    await School.deleteSchool(req.session.school.id)

    req.session.destroy((err) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return;
      }

      res.status(200).json({ message: "Account deleted successfully" }).end()
      return;
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}