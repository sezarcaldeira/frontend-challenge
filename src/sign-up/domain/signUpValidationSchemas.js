import { z } from 'zod/v4'

const PASSWORD_LENGTH_ERROR_MESSAGE = 'Please enter between 4 and 16 characters'
const MAX_LENGTH_ERROR_MESSAGE = 'Max length is 255 characters'

export const SignUpSchema = z.object({
  name: z.string().trim().min(1, 'Required').max(255, MAX_LENGTH_ERROR_MESSAGE),
  email: z.string().max(255, MAX_LENGTH_ERROR_MESSAGE).trim().email(),
  password: z
    .string()
    .trim()
    .min(4, PASSWORD_LENGTH_ERROR_MESSAGE)
    .max(16, PASSWORD_LENGTH_ERROR_MESSAGE),
  color: z.string().min(1, 'Required'),
  terms: z.literal(true, 'You must accept the terms and conditions'),
})

export const SignUpStep1Schema = SignUpSchema.pick({
  name: true,
  email: true,
  password: true,
})

export const SignUpStep2Schema = SignUpSchema.pick({
  color: true,
  terms: true,
})
