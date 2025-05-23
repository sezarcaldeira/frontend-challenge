import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Layout, Main, Page, TextField } from '~/shared/ui/components'
import { useSignUpContext } from '../SignUpContext'
import { validateStep1 } from '~/sign-up/domain/signUpValidation'

export const SignUp = () => {
  const navigate = useNavigate()
  const [state, setState] = useSignUpContext()
  const [localData, setLocalData] = useState(state)
  const [errors, setErrors] = useState({})

  const handleClickNext = () => {
    const { isValid, validationErrors } = validateStep1(localData)

    if (isValid) {
      setState(localData)
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
          <Layout.Stack>
            <TextField
              autoFocus
              type="text"
              placeholder="First Name"
              value={localData.name}
              onChange={handleChange('name')}
            />
            {errors.name && <span>{errors.name}</span>}
            <TextField
              type="text"
              placeholder="E-mail"
              value={localData.email}
              onChange={handleChange('email')}
            />
            {errors.email && <span>{errors.email}</span>}
            <TextField
              type="password"
              placeholder="Password"
              value={localData.password}
              onChange={handleChange('password')}
            />
            {errors.password && <span>{errors.password}</span>}
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
