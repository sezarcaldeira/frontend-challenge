import { httpClient } from '~/shared/infra/httpClient'
import { validate } from '../domain/getColorsValidation'

export const getColors = async () => {
  const { data } = await httpClient.get('/colors')

  validate(data)

  return { data }
}
