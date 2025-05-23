import { Button, Layout, Main, Page } from '~/shared/ui/components'
import style from './Confirmation.module.css'
import { useNavigate } from 'react-router'

export const Confirmation = () => {
  const navigate = useNavigate()

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
          <Layout.Stack>
            <ul className={style.list}>
              <li>
                <strong>First Name:</strong> Jhon
              </li>
              <li>
                <strong>E-mail:</strong> jhon@example.com
              </li>
              <li>
                <strong>Password:</strong> ******
              </li>
              <li>
                <strong>Favorite Color:</strong> Blue
              </li>
              <li>
                <strong>Terms and conditions:</strong> Agreed
              </li>
            </ul>
          </Layout.Stack>
        </Main.Content>
        <Main.Footer>
          <Layout.Group>
            <Button variant="secondary" onClick={handleClickBack}>
              Back
            </Button>
            <Button variant="primary" onClick={handleClickSubmit}>
              Submit
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
