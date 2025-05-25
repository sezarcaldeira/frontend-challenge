import { within } from '@testing-library/react'

export class ErrorPom {
  constructor(page, user) {
    this.page = page
    this.user = user
  }

  getHeader() {
    return within(this.page).getByRole('heading', { name: 'Error' })
  }

  getRestartButton() {
    return within(this.page).getByRole('button', { name: 'Restart' })
  }

  getErrorMessage() {
    return within(this.page).getByText(
      'Uh oh, something went wrong. Please try again later.'
    )
  }

  async clickRestartButton() {
    await this.user.click(this.getRestartButton())
  }
}
