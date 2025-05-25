import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import {
  Banner,
  Button,
  Checkbox,
  Field,
  Layout,
  Main,
  Page,
  Select,
  Spinner,
} from '~/shared/ui/components'
import { useSignUpContext } from '../SignUpContext'
import {
  SignUpStep1Schema,
  SignUpStep2Schema,
  validate,
} from '~/sign-up/domain/signUpValidation'
import { useContextValidation } from '../hooks/useContextValidation'
import { formatFavoriteColor } from '../presenters/SignUp.presenters'
import { useColorsQuery } from '../hooks/useColorsQuery'

export const AdditionalInfo = () => {
  const navigate = useNavigate()
  const { state, setState } = useSignUpContext()
  const [localData, setLocalData] = useState(state)
  const [errors, setErrors] = useState({})
  const {
    data: colors,
    isLoading: isLoadingColors,
    isError: failedLoadingColors,
    isSuccess: successLoadingColors,
    refetch,
  } = useColorsQuery()

  useContextValidation({ schema: SignUpStep1Schema, state })

  const handleClickBack = () => {
    navigate('/')
  }

  const handleClickNext = () => {
    const { isValid, validationErrors, validData } = validate(
      SignUpStep2Schema,
      localData
    )

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
          {isLoadingColors && <Spinner />}
          {failedLoadingColors && (
            <Layout.Stack>
              <Banner variant="error" message="Failed to load the page data" />
              <Button variant="danger" onClick={refetch}>
                Retry
              </Button>
            </Layout.Stack>
          )}
          {successLoadingColors && (
            <form
              id="additional-info-form"
              noValidate
              onSubmit={(e) => e.preventDefault()}
            >
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
                    {colors.data.map((color) => (
                      <Select.Option key={color} value={color}>
                        {formatFavoriteColor(color)}
                      </Select.Option>
                    ))}
                  </Select>
                  <Field.Hint>{errors.color}</Field.Hint>
                </Field>
                <Field error={errors.terms != null}>
                  <Layout.Group>
                    <Checkbox
                      checked={localData.terms}
                      onChange={handleCheckboxChange}
                    >
                      <>
                        I agree to{' '}
                        <Link to="/terms-and-conditions" target="_blank">
                          terms and conditions.
                        </Link>
                      </>
                    </Checkbox>
                  </Layout.Group>
                  <Field.Hint>{errors.terms}</Field.Hint>
                </Field>
              </Layout.Stack>
            </form>
          )}
        </Main.Content>
        <Main.Footer>
          <Layout.Group>
            <Button variant="secondary" onClick={handleClickBack}>
              Back
            </Button>
            <Button
              type="submit"
              form="additional-info-form"
              variant="primary"
              onClick={handleClickNext}
              disabled={isLoadingColors || failedLoadingColors}
            >
              Next
            </Button>
          </Layout.Group>
        </Main.Footer>
      </Main>
    </Page>
  )
}
