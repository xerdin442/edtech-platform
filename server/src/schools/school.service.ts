import { School } from './school.model';

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

  return school.toObject();
}

export const updateProfile = async (id: string, values: Record<string, any>) => {
  return await School.findByIdAndUpdate(id, values, { new: true })
}

export const deleteSchool = (id: string) => {
  return School.deleteOne({ _id: id });
}

export const checkOTP = async (otp: string) => {
  return School.findOne({ otp: +otp }).select('+password')
}