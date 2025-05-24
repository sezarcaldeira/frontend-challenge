import { z } from 'zod/v4'
import { createLogger } from '~/shared/logger'

export const ColorsPayloadSchema = z.string().array()

const logger = createLogger('getColorsValidation')

export const validate = (payload) => {
  try {
    ColorsPayloadSchema.parse(payload)
  } catch (error) {
    logger.info('Failed to validate colors payload', error, payload)

    throw new Error('Failed to validate colors payload')
  }
}
