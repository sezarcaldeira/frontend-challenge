import { useNavigate } from 'react-router'
import { Button, Layout, Main, Page } from '~/shared/ui/components'
import { SignUpSchema } from '~/sign-up/domain/signUpValidation'
import style from './Confirmation.module.css'
import { useSignUpContext } from '../SignUpContext'
import {
  formatAgreement,
  formatFavoriteColor,
} from '../presenters/SignUp.presenters'
import { useContextValidation } from '../hooks/useContextValidation'
import { useSubmitSignUpQuery } from '../hooks/useSubmitSignUpQuery'

export const Confirmation = () => {
  const { state } = useSignUpContext()
  const navigate = useNavigate()
  const { mutate: submit, isPending } = useSubmitSignUpQuery()

  useContextValidation({ schema: SignUpSchema, state })

  const handleClickBack = () => {
    navigate('/more-info')
  }

  const handleClickSubmit = () => {
    submit(state, {
      onSuccess: () => {
        navigate('/success')
      },
      onError: () => {
        navigate('/error')
      },
    })
  }

  return (
    <Page>
      <Main>
        <Main.Header>
          <h1>Confirmation</h1>
        </Main.Header>
        <Main.Content>
          <ul className={style.list}>
            <li>
              <strong>First Name:</strong>{' '}
              <span className={style.info}>{state.name}</span>
            </li>
            <li>
              <strong>E-mail:</strong>{' '}
              <span className={style.info}>{state.email}</span>
            </li>
            <li>
              <strong>Password:</strong> ******
            </li>
            <li>
              <strong>Favorite Color:</strong>{' '}
              <span className={style.info}>
                {formatFavoriteColor(state.color)}
              </span>
            </li>
            <li>
              <strong>Terms and conditions:</strong>{' '}
              <span className={style.info}>{formatAgreement(state.terms)}</span>
            </li>
          </ul>
        </Main.Content>
        <Main.Footer>
          <Layout.Group>
            <Button
              variant="secondary"
              onClick={handleClickBack}
              disabled={isPending}
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={handleClickSubmit}
              loading={isPending}
              autoFocus
            >
              Submit
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
