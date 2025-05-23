import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Layout, Main, Page, TextField } from '~/shared/ui/components'
import { useSignUpContext } from '../SignUpContext'

export const SignUp = () => {
  const navigate = useNavigate()
  const [state, setState] = useSignUpContext()
  const [localData, setLocalData] = useState(state)

  const handleClickNext = () => {
    setState(localData)

    navigate('/more-info')
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
            <TextField
              type="text"
              placeholder="E-mail"
              value={localData.email}
              onChange={handleChange('email')}
            />
            <TextField
              type="password"
              placeholder="Password"
              value={localData.password}
              onChange={handleChange('password')}
            />
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
