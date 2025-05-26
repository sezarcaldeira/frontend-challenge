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
import { validate, SignUpStep1Schema } from '~/sign-up/domain/signUpValidation'
import { HiddenUserMessage } from '~/shared/ui/components/HiddenUserMessage'
import { useSignUpContext } from '../SignUpContext'
import { ACCESSIBLE_ERROR_MESSAGE } from '../constants'

export const SignUp = () => {
  const navigate = useNavigate()
  const { state, setState } = useSignUpContext()
  const [localData, setLocalData] = useState(state)
  const [errors, setErrors] = useState({})

  const handleClickNext = () => {
    const { isValid, validationErrors, validData } = validate(
      SignUpStep1Schema,
      localData
    )

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
          <form
            id="sign-up-form"
            noValidate
            onSubmit={(e) => e.preventDefault()}
          >
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
                  aria-invalid={errors.name != null}
                  aria-describedby="name-error-hint"
                />
                <Field.Hint id="name-error-hint">{errors.name}</Field.Hint>
              </Field>
              <Field error={errors.email != null}>
                <TextField
                  type="text"
                  placeholder="E-mail"
                  value={localData.email}
                  onChange={handleChange('email')}
                  error={errors.email != null}
                  aria-invalid={errors.email != null}
                  aria-describedby="email-error-hint"
                />
                <Field.Hint id="email-error-hint">{errors.email}</Field.Hint>
              </Field>
              <Field error={errors.password != null}>
                <TextField
                  type="password"
                  placeholder="Password"
                  value={localData.password}
                  onChange={handleChange('password')}
                  error={errors.password != null}
                  aria-invalid={errors.password != null}
                  aria-describedby="password-error-hint"
                />
                <Field.Hint id="password-error-hint">
                  {errors.password}
                </Field.Hint>
              </Field>
            </Layout.Stack>
            <HiddenUserMessage>
              {Object.keys(errors).length > 0 && ACCESSIBLE_ERROR_MESSAGE}
            </HiddenUserMessage>
          </form>
        </Main.Content>
        <Main.Footer>
          <Layout.Group>
            <Button
              type="submit"
              form="sign-up-form"
              variant="primary"
              onClick={handleClickNext}
            >
              Next
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
