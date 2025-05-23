import { useNavigate } from 'react-router'
import { Banner, Button, Layout, Main, Page } from '~/shared/ui/components'

export const Success = () => {
  const navigate = useNavigate()

  const handleClickReset = () => {
    navigate('/error')
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
            <Button variant="secondary" onClick={handleClickReset}>
              Reset
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
