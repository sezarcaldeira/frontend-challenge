import { useState } from 'react'
import { useNavigate } from 'react-router'
import {
  Button,
  Field,
  Layout,
  Main,
  Page,
  TextField,
} from '~/shared/ui/components'
import { useSignUpContext } from '../SignUpContext'
import { validateStep1 } from '~/sign-up/domain/signUpValidation'

export const SignUp = () => {
  const navigate = useNavigate()
  const [state, setState] = useSignUpContext()
  const [localData, setLocalData] = useState(state)
  const [errors, setErrors] = useState({})

  const handleClickNext = () => {
    const { isValid, validationErrors, validData } = validateStep1(localData)

    if (isValid) {
      setState((data) => ({ ...data, ...validData }))

      navigate('/more-info')
    } else {
      setErrors(validationErrors)
    }
  }

  const handleChange = (field) => (event) => {
    const { value } = event.target

    setLocalData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Page>
      <Main>
        <Main.Header>
          <h1>Sign Up</h1>
        </Main.Header>
        <Main.Content>
          <Layout.Stack
            style={{
              '--layout-stack-gap': '0.75rem',
            }}
          >
            <Field error={errors.name != null}>
              <TextField
                autoFocus
                type="text"
                placeholder="First Name"
                value={localData.name}
                onChange={handleChange('name')}
                error={errors.name != null}
              />
              <Field.Hint>{errors.name}</Field.Hint>
            </Field>
            <Field error={errors.email != null}>
              <TextField
                type="text"
                placeholder="E-mail"
                value={localData.email}
                onChange={handleChange('email')}
                error={errors.email != null}
              />
              <Field.Hint>{errors.email}</Field.Hint>
            </Field>
            <Field error={errors.password != null}>
              <TextField
                type="password"
                placeholder="Password"
                value={localData.password}
                onChange={handleChange('password')}
                error={errors.password != null}
              />
              <Field.Hint>{errors.password}</Field.Hint>
            </Field>
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
