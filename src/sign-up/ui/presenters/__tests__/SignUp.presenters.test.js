import { formatAgreement, formatFavoriteColor } from '../SignUp.presenters'

describe('formatFavoriteColor', () => {
  it('should capitalize the first letter of the color', () => {
    const color = 'blue'
    const result = formatFavoriteColor(color)
    expect(result).toBe('Blue')
  })

  it('should return an empty string if the input is invalid', () => {
    const color = {}
    const result = formatFavoriteColor(color)
    expect(result).toBe('')
  })
})

describe('formatAgreement', () => {
  it('should return "Agreed" when passed true', () => {
    const result = formatAgreement(true)
    expect(result).toBe('Agreed')
  })

  it('should return "Not agreed" when passed false', () => {
    const result = formatAgreement(false)
    expect(result).toBe('Not agreed')
  })
})
