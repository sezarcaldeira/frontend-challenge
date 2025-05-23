import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { validate } from '~/sign-up/domain/signUpValidation'

export const useContextValidation = ({ schema, state }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const { isValid } = validate(schema, state)

    if (!isValid) {
      navigate('/')
    }
  }, [state])
}
