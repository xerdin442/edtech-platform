import mongoose, { Schema, Document, Types } from "mongoose";

export interface IStudent extends Document {
  school: Types.ObjectId
  lastName: string
  otherNames: string
  age: number
  dateOfBirth: Date
  gender: 'male' | 'female'
  admissionDate: Date
  regNumber: string
  class: Types.ObjectId
  photo: string
  nationality: string
  state: string
  localGovernment: string
  town: string
  address: string
  fees: number
  totalAmountPaid: number
  status: 'paid' | 'unpaid' | 'part' | 'scholarship'
  guardians?: {
    father: { lastName: string, firstName: string, phone: string, email: string, address: string }
    mother: { lastName: string, firstName: string, phone: string, email: string, address: string }
  }
  health?: {
    genotype: string
    currentMedications: string
    bloodGroup: string
    healthCondition: string
    allergies: string
    disabilities: string
  }
}

const studentSchema = new Schema<IStudent>({
  school: { type: Schema.Types.ObjectId, required: true, ref: 'School' },
  lastName: { type: String, required: true },
  otherNames: { type: String, required: true },
  age: { type: Number, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true, enum: ['male', 'female'] },
  admissionDate: { type: Date, required: true },
  regNumber: { type: String, required: true },
  class: { type: Schema.Types.ObjectId, required: true, ref: 'Class' },
  photo: { type: String, required: true },
  state: { type: String, required: true },
  nationality: { type: String, required: true },
  localGovernment: { type: String, required: true },
  town: { type: String, required: true },
  address: { type: String, required: true },
  fees: { type: Number, required: true },
  totalAmountPaid: { type: Number, required: true, default: 0 },
  
  status: {
    type: String,
    required: true,
    enum: ['unpaid', 'paid', 'part', 'scholarship'],
    default: 'unpaid'
  },

  guardians: {
    father: {
      lastName: { type: String },
      firstName: { type: String },
      phone: { type: String },
      email: { type: String },
      address: { type: String }
    },
    mother: {
      lastName: { type: String },
      firstName: { type: String },
      phone: { type: String },
      email: { type: String },
      address: { type: String }
    }
  },

  health: {
    genotype: { type: String },
    currentMedications: { type: String },
    bloodGroup: { type: String },
    healthCondition: { type: String },
    allergies: { type: String },
    disabilities: { type: String }
  }
})

export const Student = mongoose.model<IStudent>('Student', studentSchema);