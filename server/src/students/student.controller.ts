import { Request, Response } from 'express';

import * as Student from './student.service';
import { getClassByName } from '../classes/class.service';

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
  
    res.status(200).json({ message: 'Student profile created successfully', student })
    return;
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}