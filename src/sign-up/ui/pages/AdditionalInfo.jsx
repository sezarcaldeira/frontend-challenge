import { Link, useNavigate } from 'react-router'
import {
  Button,
  Checkbox,
  Layout,
  Main,
  Page,
  Select,
} from '~/shared/ui/components'

export const AdditionalInfo = () => {
  const navigate = useNavigate()

  const handleClickBack = () => {
    navigate(-1)
  }

  const handleClickNext = () => {
    navigate('/confirmation')
  }

  return (
    <Page>
      <Main>
        <Main.Header>
          <h1>Additional Info</h1>
        </Main.Header>
        <Main.Content>
          <Layout.Stack>
            <Select>
              <Select.Option value="">Select your favorite color</Select.Option>
              <Select.Option value="blue">Blue</Select.Option>
              <Select.Option value="red">Red</Select.Option>
              <Select.Option value="green">Green</Select.Option>
            </Select>
            <Layout.Group>
              <Checkbox />
              <span>
                I agree to{' '}
                <Link to="/terms-and-conditions" target="_blank">
                  terms and conditions.
                </Link>
              </span>
            </Layout.Group>
          </Layout.Stack>
        </Main.Content>
        <Main.Footer>
          <Layout.Group>
            <Button variant="secondary" onClick={handleClickBack}>
              Back
            </Button>
            <Button variant="primary" onClick={handleClickNext}>
              Next
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
