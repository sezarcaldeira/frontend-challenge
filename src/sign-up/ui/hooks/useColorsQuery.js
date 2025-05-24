import { useQuery } from '@tanstack/react-query'
import { getColors } from '~/sign-up/infra/signUpService'

export const useColorsQuery = () => {
  return useQuery({
    queryKey: ['colors'],
    queryFn: getColors,
  })
}
