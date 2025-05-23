import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import {
  Button,
  Checkbox,
  Layout,
  Main,
  Page,
  Select,
} from '~/shared/ui/components'
import { useSignUpContext } from '../SignUpContext'

export const AdditionalInfo = () => {
  const navigate = useNavigate()
  const [state, setState] = useSignUpContext()
  const [localData, setLocalData] = useState(state)

  const handleClickBack = () => {
    navigate(-1)
  }

  const handleClickNext = () => {
    setState(localData)

    navigate('/confirmation')
  }

  const handleChangeColor = (event) => {
    const { value } = event.target

    setLocalData((prev) => ({
      ...prev,
      color: value,
    }))
  }

  const handleCheckboxChange = (event) => {
    const { checked } = event.target

    setLocalData((prev) => ({
      ...prev,
      terms: checked,
    }))
  }

  return (
    <Page>
      <Main>
        <Main.Header>
          <h1>Additional Info</h1>
        </Main.Header>
        <Main.Content>
          <Layout.Stack>
            <Select
              autoFocus
              placeholder="Select your favorite color"
              value={localData.color}
              onChange={handleChangeColor}
            >
              <Select.Option value="blue">Blue</Select.Option>
              <Select.Option value="red">Red</Select.Option>
              <Select.Option value="green">Green</Select.Option>
            </Select>
            <Layout.Group>
              <Checkbox
                checked={localData.terms}
                onChange={handleCheckboxChange}
              />
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
