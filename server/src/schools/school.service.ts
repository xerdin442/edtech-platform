import { School } from './school.model';
import { createTransferRecipient } from '../shared/util/paystack';

export const getSchoolById = async (id: string) => {
  const school = await School.findById(id)
  if (!school) {
    throw new Error('An error occured while fetching school by id')
  }

  return school;
}

export const getSchoolByEmail = (email: string) => {
  return School.findOne({ email });
}

export const createSchool = async (values: Record<string, any>) => {
  const school = new School(values)
  if (!school) {
    throw new Error('An error occured while creating new school')
  }
  await school.save();

  return school;
}

export const updateProfile = async (id: string, values: Record<string, any>) => {
  const school = await School.findByIdAndUpdate(id, values, { new: true })
  if (!school) {
    throw new Error('An error occured while updating school profile')
  }

  // school.recipient = await createTransferRecipient(school.bankDetails)
  // await school.save()

  return school;
}

export const deleteSchool = (id: string) => {
  return School.deleteOne({ _id: id });
}

export const checkOTP = async (otp: string) => {
  return School.findOne({ otp: +otp }).select('+password')
}