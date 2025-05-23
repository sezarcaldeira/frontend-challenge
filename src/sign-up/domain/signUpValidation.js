import { checkValidationResult } from '~/shared/utils/zodUtils'
import { SignUpStep1Schema, SignUpStep2Schema } from './signUpValidationSchemas'

export const validateStep1 = (data) => {
  const result = SignUpStep1Schema.safeParse(data)

  return checkValidationResult(result)
}

export const validateStep2 = (data) => {
  const result = SignUpStep2Schema.safeParse(data)

  return checkValidationResult(result)
}
