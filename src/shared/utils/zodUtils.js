import { z } from 'zod/v4'

export const parseZodErrorToObject = (error) => {
  const tree = z.treeifyError(error)

  const errors = Object.entries(tree.properties).reduce((acc, [key, value]) => {
    acc[key] = value.errors[0]
    return acc
  }, {})

  return errors
}

export const checkValidationResult = (result) => {
  if (result.success) {
    return { isValid: true, validationErrors: {}, validData: result.data }
  }

  const validationErrors = parseZodErrorToObject(result.error)

  return { isValid: false, validationErrors, validData: {} }
}
