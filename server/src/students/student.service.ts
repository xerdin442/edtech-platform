import { School } from "../schools/school.model";
import { Student } from "./student.model";

export const addStudent = async (values: Record<string, any>) => {
  const student = new Student(values)
  if (!student) {
    throw new Error('An error occured while creating student profile')
  }
  await student.save();

  return student;
}

export const getStudentById = async (id: string) => {
  const student = await Student.findById(id)
  if (!student) {
    throw new Error('An error occured while fetching student details')
  }

  return student;
}

export const updateProfile = async (id: string, values: Record<string, any>) => {
  const student = await Student.findByIdAndUpdate(id, values, { new: true })
  if (!student) {
    throw new Error('An error occured while updating student profile')
  }

  return student;
}

export const deleteStudent = (id: string) => {
  return Student.deleteOne({ _id: id });
}

export const generateRegNumber = async (id: string) => {
  const school = await School.findById(id)
  const prefix = school.name.split(' ').map(word => word[0].toUpperCase()).join('')
  const suffix = school.regNumber + school.students + 1
  const regNumber = `${prefix}-${suffix}`

  return regNumber;
}