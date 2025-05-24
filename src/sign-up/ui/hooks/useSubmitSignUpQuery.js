import { useMutation } from '@tanstack/react-query'
import { submitSignUp } from '~/sign-up/infra/signUpService'

export const useSubmitSignUpQuery = () => {
  return useMutation({
    queryKey: ['submitSignUp'],
    mutationFn: submitSignUp,
  })
}
