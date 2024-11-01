import mongoose, { Schema, Document } from "mongoose";

export interface ISchool extends Document {
  name: string
  email: string
  logo: string
  password: string
  address?: string
  phone?: string
  balance: number
  pin: number
  students: number
  employees: number
  regNumber: number
  otp?: number
  otpExpiration?: number
  otpSubject?: string
  recipient?: string
  customer?: string
  bankDetails?: { accountName: string, accountNumber: string, bankName: string }
}

const schoolSchema = new Schema<ISchool>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  logo: { type: String, required: true },
  password: { type: String, required: true, select: false },
  phone: { type: String },
  address: { type: String },
  balance: { type: Number, required: true, default: 0 },
  pin: { type: Number, required: true, default: 0, select: false },
  students: { type: Number, required: true, default: 0 },
  employees: { type: Number, required: true, default: 0 },
  regNumber: { type: Number, required: true },
  otp: { type: Number },
  otpExpiration: { type: Number },
  otpSubject: { type: String },
  recipient: { type: String },
  customer: { type: String },
  bankDetails: {
    accountName: { type: String },
    accountNumber: { type: String },
    bankName: { type: String }
  }
})

export const School = mongoose.model<ISchool>('School', schoolSchema);