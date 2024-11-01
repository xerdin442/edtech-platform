import { Request, Response } from 'express';
import { Types } from 'mongoose';

import * as Student from './student.service';
import { getClassByName } from '../classes/class.service';
import { IStudent } from './student.model';

export const addStudent = async (req: Request, res: Response) => {
  try {
    const { lastName, otherNames, age, dateOfBirth, gender, admissionDate } = req.body
    const { className, state, nationality, localGovernment, town, address, balance } = req.body
    const { fatherLastName, fatherfirstName, fatherEmail, fatherPhone, fatherAddress } = req.body
    const { motherLastName, motherfirstName, motherEmail, motherPhone, motherAddress } = req.body
    const { genotype, currentMedications, bloodGroup, allergies, healthCondition, disabilities } = req.body

    const schoolId = req.session.school.id
    const regNumber = await Student.generateRegNumber(schoolId)
    const classId = (await getClassByName(className))._id

    let photo;
    if (!req.file) {
      photo = process.env.DEFAULT_IMAGE // Use a default image if no file is uploaded
    } else {
      photo = req.file.path
    }

    const student = await Student.addStudent({
      school: schoolId,
      lastName, otherNames,
      age: +age,
      dateOfBirth, gender, admissionDate, regNumber,
      class: classId,
      photo, state, nationality, localGovernment, town, address,
      fees: balance,
      guardians: {
        father: {
          lastName: fatherLastName,
          firstName: fatherfirstName,
          phone: fatherPhone,
          email: fatherEmail,
          address: fatherAddress
        },
        mother: {
          lastName: motherLastName,
          firstName: motherfirstName,
          phone: motherPhone,
          email: motherEmail,
          address: motherAddress
        }
      },
      health: { genotype, currentMedications, bloodGroup, healthCondition, allergies, disabilities }
    })

    res.status(201).json({ message: 'Student profile created successfully', student }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const getStudentProfile = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    if (!Types.ObjectId.isValid(studentId)) {
      res.status(400).json({ error: "Invalid student ID parameter" })
      return;
    }

    const student = await Student.getStudentById(studentId)

    res.status(200).json({ student }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const updateStudentProfile = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    if (!Types.ObjectId.isValid(studentId)) {
      res.status(400).json({ error: "Invalid student ID parameter" })
      return;
    }

    const { generalInfo, parentsInfo, addressInfo, classInfo, healthInfo } = req.query

    const { lastName, otherNames, dateOfBirth, gender } = req.body
    const { className, state, nationality, localGovernment, town, address } = req.body
    const { fatherLastName, fatherfirstName, fatherEmail, fatherPhone, } = req.body
    const { motherLastName, motherfirstName, motherEmail, motherPhone } = req.body
    const { genotype, currentMedications, bloodGroup, allergies, healthCondition, disabilities } = req.body

    let student: IStudent;
    if (generalInfo) {
      student = await Student.updateProfile(studentId, { lastName, otherNames, gender, dateOfBirth })
    } else if (parentsInfo) {
      student = await Student.updateProfile(studentId, {
        guardians: {
          father: {
            lastName: fatherLastName,
            firstName: fatherfirstName,
            phone: fatherPhone,
            email: fatherEmail
          },
          mother: {
            lastName: motherLastName,
            firstName: motherfirstName,
            phone: motherPhone,
            email: motherEmail
          }
        }
      })
    } else if (addressInfo) {
      student = await Student.updateProfile(studentId, { state, nationality, localGovernment, town, address })
    } else if (healthInfo) {
      student = await Student.updateProfile(studentId, {
        health: { genotype, currentMedications, bloodGroup, healthCondition, allergies, disabilities }
      })
    } else if (classInfo) {
      const classId = (await getClassByName(className))._id
      student = await Student.updateProfile(studentId, { class: classId })
    }

    res.status(200).json({ message: 'Student profile updated successfully', student }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const deleteStudentProfile = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    if (!Types.ObjectId.isValid(studentId)) {
      res.status(400).json({ error: "Invalid student ID parameter" })
      return;
    }

    await Student.deleteStudent(studentId)

    res.status(200).json({ message: 'Student profile deleted successfully' }).end()
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}