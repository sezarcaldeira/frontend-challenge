import { useNavigate } from 'react-router'
import { Banner, Button, Layout, Main, Page } from '~/shared/ui/components'

export const SignUpError = () => {
  const navigate = useNavigate()

  const handleClickReset = () => {
    navigate('/')
  }

  return (
    <Page>
      <Main>
        <Main.Header>
          <h1>Error</h1>
        </Main.Header>
        <Main.Content>
          <Banner
            variant="error"
            message="Uh oh, something went wrong. Please try again later."
          />
        </Main.Content>
        <Main.Footer>
          <Layout.Group>
            <Button variant="danger" onClick={handleClickReset} autoFocus>
              Reset
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
