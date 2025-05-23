import { capitalize } from '~/shared/utils/stringUtils'

export const formatAgreement = (agreed) => {
  return agreed ? 'Agreed' : 'Not agreed'
}

export const formatFavoriteColor = (color) => {
  return capitalize(color)
}
