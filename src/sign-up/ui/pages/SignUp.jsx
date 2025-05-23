import { useNavigate } from 'react-router'
import { Button, Layout, Main, Page, TextField } from '~/shared/ui/components'

export const SignUp = () => {
  const navigate = useNavigate()

  const handleClickNext = () => {
    navigate('/more-info')
  }

  return (
    <Page>
      <Main>
        <Main.Header>
          <h1>Sign Up</h1>
        </Main.Header>
        <Main.Content>
          <Layout.Stack>
            <TextField type="text" placeholder="First Name" />
            <TextField type="text" placeholder="E-mail" />
            <TextField type="password" placeholder="Password" />
          </Layout.Stack>
        </Main.Content>
        <Main.Footer>
          <Layout.Group>
            <Button variant="primary" onClick={handleClickNext}>
              Next
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
