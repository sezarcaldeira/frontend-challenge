import { within } from '@testing-library/react'

export class SignUpPom {
  constructor(page, user) {
    this.page = page
    this.user = user
  }

  getHeader() {
    return within(this.page).getByRole('heading', { name: 'Sign Up' })
  }

  getFirstNameField() {
    return within(this.page).getByPlaceholderText('First Name')
  }

  getEmailField() {
    return within(this.page).getByPlaceholderText('E-mail')
  }

  getPasswordField() {
    return within(this.page).getByPlaceholderText('Password')
  }

  getNextButton() {
    return within(this.page).getByRole('button', { name: 'Next' })
  }

  async fillFirstNameField(firstName) {
    this.firstNameField = this.getFirstNameField()
    await this.user.type(this.firstNameField, firstName)
  }

  async fillEmailField(email) {
    this.emailField = this.getEmailField()
    await this.user.type(this.emailField, email)
  }

  async fillPasswordField(password) {
    this.passwordField = this.getPasswordField()
    await this.user.type(this.passwordField, password)
  }

  async fillForm({ firstName, email, password }) {
    await this.fillFirstNameField(firstName)
    await this.fillEmailField(email)
    await this.fillPasswordField(password)
  }

  async clickNextButton() {
    await this.user.click(this.getNextButton())
  }
}
