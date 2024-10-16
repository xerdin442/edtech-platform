import mongoose, { Schema, Document, Types } from "mongoose";

export interface ISchool extends Document {
  name: string
  email: string
  logo: string
  password: string
  phone?: string
  balance: number
  otp?: number,
  otpExpiration?: number
  bankDetails: { accountName: string, accountNumber: string, bankName: string }
}

const schoolSchema = new Schema<ISchool>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  logo: { type: String, required: true },
  password: { type: String, required: true, select: false },
  phone: { type: String },
  balance: { type: Number, required: true },
  otp: { type: Number },
  otpExpiration: { type: Number },
  bankDetails: {
    accountName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    bankName: { type: String, required: true }
  }
})

export const School = mongoose.model<ISchool>('School', schoolSchema);