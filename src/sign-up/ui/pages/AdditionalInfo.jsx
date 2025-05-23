import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import {
  Button,
  Checkbox,
  Field,
  Layout,
  Main,
  Page,
  Select,
} from '~/shared/ui/components'
import { useSignUpContext } from '../SignUpContext'
import { validateStep2 } from '~/sign-up/domain/signUpValidation'

export const AdditionalInfo = () => {
  const navigate = useNavigate()
  const [state, setState] = useSignUpContext()
  const [localData, setLocalData] = useState(state)
  const [errors, setErrors] = useState({})

  const handleClickBack = () => {
    navigate(-1)
  }

  const handleClickNext = () => {
    const { isValid, validationErrors, validData } = validateStep2(localData)

    if (isValid) {
      setState((data) => ({ ...data, ...validData }))

      navigate('/confirmation')
    } else {
      setErrors(validationErrors)
    }
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
          <Layout.Stack
            style={{
              '--layout-stack-gap': '0.75rem',
            }}
          >
            <Field error={errors.color != null}>
              <Select
                autoFocus
                placeholder="Select your favorite color"
                value={localData.color}
                onChange={handleChangeColor}
                error={errors.color != null}
              >
                <Select.Option value="blue">Blue</Select.Option>
                <Select.Option value="red">Red</Select.Option>
                <Select.Option value="green">Green</Select.Option>
              </Select>
              <Field.Hint>{errors.color}</Field.Hint>
            </Field>
            <Field error={errors.terms != null}>
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
              <Field.Hint>{errors.terms}</Field.Hint>
            </Field>
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
