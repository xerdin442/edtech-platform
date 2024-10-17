import { check, ValidationChain, validationResult } from "express-validator/lib";
import bcrypt from 'bcryptjs'
import { NextFunction, Request, Response } from "express";

import { cloudinary } from "../config/storage";
import * as School from "../../schools/school.service";

const PHONE_PATTERN = /^(07|08|09)[01]\d{8}$/
const ACCOUNT_NUMBER_PATTERN = /^\d{10}$/

export const validateSignUp: ValidationChain[] = [
  check('name').trim()
    .isLength({ min: 5, max: 100 }).withMessage('School name must be between 5 to 100 characters long'),

  check('email').normalizeEmail()
    .isEmail().withMessage('Please enter a valid email')
    .custom(async (value: string) => {
      const school = await School.getSchoolByEmail(value)
      if (school) {
        throw new Error('School with that email address already exists')
      }

      return true;
    }),

  check('password').trim()
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })
    .withMessage('Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one digit and one symbol'),

  check('confirmPassword').trim()
    .custom(async (value: string, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match!')
      }

      return true;
    })
]

export const validateLogin: ValidationChain[] = [
  check('email').normalizeEmail()
    .isEmail().withMessage('Please enter a valid email')
    .custom(async (value: string, { req }) => {
      // Check the email and send an error message if it does not exist
      const school = await School.getSchoolByEmail(value).select('+password')
      if (!school) {
        throw new Error('No school found with that email')
      }

      // Check the entered password and send an error message if it is invalid
      const checkPassword = await bcrypt.compare(req.body.password, school.password)
      if (!checkPassword) {
        throw new Error('Invalid password')
      }

      return true;
    })
]

export const validatePasswordReset: ValidationChain[] = [
  check('password').trim()
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })
    .withMessage('Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one digit and one symbol'),

  check('confirmPassword').trim()
    .custom(async (value: string, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match!')
      }

      return true;
    })
]

export const validateProfileUpdate: ValidationChain[] = [
  check('name').trim()
    .isLength({ min: 5, max: 100 }).withMessage('School name must be between 5 to 100 characters long'),

  check('email').normalizeEmail()
    .isEmail().withMessage('Please enter a valid email'),
  
  check('address').trim()
    .isLength({ min: 10 }).withMessage('Address must be at least 10 characters long'),
  
  check('phone').trim()
    .matches(PHONE_PATTERN).withMessage('Please enter a valid Nigerian phone number'),
  
  check('accountNumber').trim()
    .matches(ACCOUNT_NUMBER_PATTERN).withMessage('Please enter a valid account number'),

  check('accountName').trim()
    .isLength({ min: 10 }).withMessage('Account name must be at least 10 characters long'),
]

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  // Extract all validation errors, if any, and return the error message
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const error = errors.array()[0].msg

    // Check for any uploaded image and delete from cloud storage
    if (req.file && req.file.path) {
      // Extract the public ID of the image from the file path
      const publicId = req.file.path.split('/').slice(-2).join('/').replace(/\.[^/.]+$/, "");

      // Delete the uploaded image from Cloudinary
      cloudinary.destroy(publicId, (error, result) => {
        if (error) {
          console.error('Failed to delete image from Cloudinary:', error);
        } else {
          console.log('Image deleted from Cloudinary');
        }
      })
    }

    res.status(422).json({ error })
    return;
  }

  next() // Proceed to next middleware if there are no errors
}