import { within } from '@testing-library/react'

export class ConfirmationPom {
  constructor(page, user) {
    this.page = page
    this.user = user
  }

  getHeader() {
    return within(this.page).getByRole('heading', { name: 'Confirmation' })
  }

  getBackButton() {
    return within(this.page).getByRole('button', { name: 'Back' })
  }

  getSubmitButton() {
    return within(this.page).getByRole('button', { name: 'Submit' })
  }

  async clickSubmitButton() {
    await this.user.click(this.getSubmitButton())
  }

  async clickBackButton() {
    await this.user.click(this.getBackButton())
  }
}
