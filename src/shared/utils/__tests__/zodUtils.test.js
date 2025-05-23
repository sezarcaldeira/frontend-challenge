import { ZodError } from 'zod/v4'
import { parseZodErrorToObject, checkValidationResult } from '../zodUtils'

const mockedZodError = new ZodError([
  {
    message: 'Name is required',
    path: ['name'],
  },
  {
    message: 'Invalid email format',
    path: ['email'],
  },
])
describe('parseZodErrorToObject', () => {
  it('should parse zod error to object with first error message for each field', () => {
    const result = parseZodErrorToObject(mockedZodError)

    expect(result).toEqual({
      name: 'Name is required',
      email: 'Invalid email format',
    })
  })
})

describe('checkValidationResult', () => {
  it('should return isValid true with empty validationErrors when validation succeeds', () => {
    const successResult = { success: true, data: { name: 'John' } }

    const result = checkValidationResult(successResult)

    expect(result).toEqual({ isValid: true, validationErrors: {} })
  })

  it('should return isValid false with validation errors when validation fails', () => {
    const errorResult = {
      success: false,
      error: mockedZodError,
    }

    const mockValidationErrors = {
      name: 'Name is required',
      email: 'Invalid email format',
    }

    const result = checkValidationResult(errorResult)

    expect(result).toEqual({
      isValid: false,
      validationErrors: mockValidationErrors,
    })
  })
})
