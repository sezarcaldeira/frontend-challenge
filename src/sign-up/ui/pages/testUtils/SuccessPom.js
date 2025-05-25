import { within } from '@testing-library/react'

export class SuccessPom {
  constructor(page, user) {
    this.page = page
    this.user = user
  }

  getHeader() {
    return within(this.page).getByRole('heading', { name: 'Success!' })
  }

  getResetButton() {
    return within(this.page).getByRole('button', { name: 'Reset' })
  }

  getSuccessMessage() {
    return within(this.page).getByText(
      'You should receive a confirmation email soon.'
    )
  }

  async clickResetButton() {
    await this.user.click(this.getResetButton())
  }
}
