import { useNavigate } from 'react-router'
import { Button, Layout, Main, Page } from '~/shared/ui/components'
import style from './Confirmation.module.css'
import { useSignUpContext } from '../SignUpContext'
import {
  formatAgreement,
  formatFavoriteColor,
} from '../presenters/SignUp.presenters'

export const Confirmation = () => {
  const navigate = useNavigate()
  const [state] = useSignUpContext()

  const handleClickBack = () => {
    navigate(-1)
  }

  const handleClickSubmit = () => {
    navigate('/success')
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
            <Button variant="secondary" onClick={handleClickBack}>
              Back
            </Button>
            <Button variant="primary" onClick={handleClickSubmit} autoFocus>
              Submit
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
