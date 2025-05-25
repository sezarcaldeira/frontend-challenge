import { useNavigate } from 'react-router'
import { Banner, Button, Layout, Main, Page } from '~/shared/ui/components'
import { useSignUpContext } from '../SignUpContext'

export const Success = () => {
  const { reset } = useSignUpContext()
  const navigate = useNavigate()

  const handleClickRestart = () => {
    reset()
    navigate('/')
  }

  return (
    <Page>
      <Main>
        <Main.Header>
          <h1>Success!</h1>
        </Main.Header>
        <Main.Content>
          <Banner
            variant="success"
            message="You should receive a confirmation email soon."
          />
        </Main.Content>
        <Main.Footer>
          <Layout.Group>
            <Button variant="secondary" onClick={handleClickRestart} autoFocus>
              Restart
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
