import { Schema, model, models } from 'mongoose'

import { type User as Users } from 'types'

const userSchema = new Schema<Users>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
    phone: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true },
)

export const User = models.User || model<Users>('User', userSchema)
