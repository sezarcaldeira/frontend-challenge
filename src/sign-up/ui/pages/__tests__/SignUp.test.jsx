import userEvent from '@testing-library/user-event'
import { QueryClientProvider } from '@tanstack/react-query'
import { mockQueryClient } from '~/shared/testUitls/mockQueryClient'
import { render, screen, waitFor } from '@testing-library/react'
import { failureHandlers, handlers, requestLog } from '~/mock/handlers'

import { SignUpRoutes } from '../../SignUpRoutes'
import { MemoryRouter } from 'react-router'
import { SignUpPom } from '../testUtils/SignUpPom'
import { AdditionalInfoPom } from '../testUtils/AdditionaInfoPom'
import { ConfirmationPom } from '../testUtils/ConfirmationPom'
import { SuccessPom } from '../testUtils/SuccessPom'
import { mockServer } from '~/mock/server'
import { ErrorPom } from '../testUtils/ErrorPom'

const setup = ({ initialEntries } = { initialEntries: ['/'] }) => {
  const user = userEvent.setup({
    advanceTimers: jest.advanceTimersByTime,
  })

  const view = render(
    <MemoryRouter initialEntries={initialEntries}>
      <QueryClientProvider client={mockQueryClient}>
        <SignUpRoutes />
      </QueryClientProvider>
    </MemoryRouter>
  )
  return {
    view,
    user,
  }
}

describe('SignUp', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.clearAllMocks()
  })

  it('navigates through the pages and completes the sign-up process successfully', async () => {
    const { user, view } = setup()

    const signUpPom = new SignUpPom(view.container, user)
    expect(signUpPom.getHeader()).toBeInTheDocument()

    // submit the form without filling it
    await signUpPom.clickNextButton()

    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Invalid email address')).toBeInTheDocument()
    expect(
      screen.getByText('Please enter between 4 and 16 characters')
    ).toBeInTheDocument()

    // fill the form with valid data
    await signUpPom.fillForm({
      firstName: 'John',
      email: 'john.doe@email.com',
      password: 'password123',
    })

    await signUpPom.clickNextButton()

    const additionalInfoPom = new AdditionalInfoPom(view.container, user)
    expect(additionalInfoPom.getHeader()).toBeInTheDocument()

    // check if navigating back and forth works
    {
      await additionalInfoPom.clickBackButton()
      expect(signUpPom.getHeader()).toBeInTheDocument()
      await signUpPom.clickNextButton()
      expect(additionalInfoPom.getHeader()).toBeInTheDocument()
    }

    await waitFor(() => {
      expect(additionalInfoPom.getNextButton()).toBeEnabled()
    })

    // submit the form without filling it
    await additionalInfoPom.clickNextButton()

    expect(screen.getByText('Favorite color is required')).toBeInTheDocument()
    expect(
      screen.getByText('You must accept the terms and conditions')
    ).toBeInTheDocument()

    // fill the form with valid data
    await additionalInfoPom.selectColor('red')
    await additionalInfoPom.checkTerms()
    await additionalInfoPom.clickNextButton()

    const confirmationPom = new ConfirmationPom(view.container, user)
    expect(confirmationPom.getHeader()).toBeInTheDocument()

    // check if navigating back and forth works
    {
      await confirmationPom.clickBackButton()
      expect(additionalInfoPom.getHeader()).toBeInTheDocument()
      await additionalInfoPom.clickNextButton()
      expect(confirmationPom.getHeader()).toBeInTheDocument()
    }

    const listItem = screen.getAllByRole('listitem')
    expect(listItem[0]).toHaveTextContent('First Name: John')
    expect(listItem[1]).toHaveTextContent('E-mail: john.doe@email.com')
    expect(listItem[2]).toHaveTextContent('Password: ******')
    expect(listItem[3]).toHaveTextContent('Favorite Color: Red')
    expect(listItem[4]).toHaveTextContent('Terms and conditions: Agreed')

    await confirmationPom.clickSubmitButton()

    await waitFor(() => {
      expect(requestLog.post[0]).toEqual({
        color: 'red',
        email: 'john.doe@email.com',
        name: 'John',
        password: 'password123',
        terms: true,
      })
    })

    const successPagePom = new SuccessPom(view.container, user)
    expect(successPagePom.getHeader()).toBeInTheDocument()
    expect(successPagePom.getSuccessMessage()).toBeInTheDocument()

    await successPagePom.clickRestartButton()

    // Back to the first page
    expect(signUpPom.getHeader()).toBeInTheDocument()
  })

  it.each([['/more-info'], ['/confirmation']])(
    'navigates back to the first page when the user access the %s page with invalid data',
    async (initialRoute) => {
      const { user, view } = setup({ initialEntries: [initialRoute] })

      const signUpPom = new SignUpPom(view.container, user)
      expect(signUpPom.getHeader()).toBeInTheDocument()
    }
  )

  it('shows an error message when the additional info page fails to load', async () => {
    // Mock the server to return an error response
    mockServer.use(failureHandlers.colors)

    const { user, view } = setup()

    const signUpPom = new SignUpPom(view.container, user)
    expect(signUpPom.getHeader()).toBeInTheDocument()

    // fill the form with valid data
    await signUpPom.fillForm({
      firstName: 'John',
      email: 'john.doe@email.com',
      password: 'password123',
    })

    await signUpPom.clickNextButton()

    const additionalInfoPom = new AdditionalInfoPom(view.container, user)
    expect(additionalInfoPom.getHeader()).toBeInTheDocument()

    await waitFor(() => {
      expect(additionalInfoPom.getErrorMessage()).toBeInTheDocument()
    })

    // reset handlers and try to load the page again
    mockServer.use(...handlers)

    await additionalInfoPom.clickRetryButton()

    await waitFor(() => {
      expect(additionalInfoPom.getNextButton()).toBeEnabled()
    })
  })

  it('navigates to the error page when the submit fails', async () => {
    // Mock the server to return an error response
    mockServer.use(failureHandlers.submit)

    const { user, view } = setup()

    const signUpPom = new SignUpPom(view.container, user)
    expect(signUpPom.getHeader()).toBeInTheDocument()

    // fill the form with valid data
    await signUpPom.fillForm({
      firstName: 'John',
      email: 'john.doe@email.com',
      password: 'password123',
    })

    await signUpPom.clickNextButton()

    const additionalInfoPom = new AdditionalInfoPom(view.container, user)
    expect(additionalInfoPom.getHeader()).toBeInTheDocument()
    await additionalInfoPom.selectColor('blue')
    await additionalInfoPom.checkTerms()
    await additionalInfoPom.clickNextButton()

    const confirmationPom = new ConfirmationPom(view.container, user)
    expect(confirmationPom.getHeader()).toBeInTheDocument()
    await confirmationPom.clickSubmitButton()

    await waitFor(() => {
      expect(requestLog.post[0]).toEqual({
        color: 'blue',
        email: 'john.doe@email.com',
        name: 'John',
        password: 'password123',
        terms: true,
      })
    })

    const errorPagePom = new ErrorPom(view.container, user)
    expect(errorPagePom.getHeader()).toBeInTheDocument()
    expect(errorPagePom.getErrorMessage()).toBeInTheDocument()

    await errorPagePom.clickRestartButton()

    // Back to the first page
    expect(signUpPom.getHeader()).toBeInTheDocument()
  })
})
