import { within } from '@testing-library/react'

export class AdditionalInfoPom {
  constructor(page, user) {
    this.page = page
    this.user = user
  }

  getNextButton() {
    return within(this.page).getByRole('button', { name: 'Next' })
  }

  getBackButton() {
    return within(this.page).getByRole('button', { name: 'Back' })
  }

  getFavoriteColorSelect() {
    return within(this.page).findByRole('combobox', {
      name: /select your favorite color/i,
    })
  }

  getTermsCheckbox() {
    return within(this.page).findByRole('checkbox', {
      name: /I agree to terms and conditions/i,
    })
  }

  getHeader() {
    return within(this.page).getByRole('heading', { name: 'Additional Info' })
  }

  async selectColor(color) {
    const colorSelect = await this.getFavoriteColorSelect()
    await this.user.selectOptions(colorSelect, color)
  }

  async checkTerms() {
    const termsCheckbox = await this.getTermsCheckbox()
    await this.user.click(termsCheckbox)
  }

  async clickNextButton() {
    await this.user.click(this.getNextButton())
  }

  async clickBackButton() {
    await this.user.click(this.getBackButton())
  }

  getErrorMessage() {
    return within(this.page).getByText('Failed to load the page data')
  }

  getRetryButton() {
    return within(this.page).getByRole('button', { name: 'Retry' })
  }

  async clickRetryButton() {
    await this.user.click(this.getRetryButton())
  }
}
