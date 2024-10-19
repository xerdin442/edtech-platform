import mongoose, { Schema, Document, Types } from "mongoose";

export interface IClass extends Document {
  teacher: Types.ObjectId
  name: string
  fees: { total: number, details: Record<string, number> }
  students: number
}

const classSchema = new Schema<IClass>({
  teacher: { type: Schema.Types.ObjectId, required: true, ref: 'Teacher' },
  name: { type: String, required: true },
  fees: {
    total: { type: Number, required: true },
    details: { type: Object, required: true }
  },
  students: { type: Number, required: true }
})

export const Class = mongoose.model<IClass>('Class', classSchema);