import { render, screen } from '@testing-library/react'
import { App } from './App'

it('renders without crashing', () => {
  render(<App />)

  expect(screen.getByRole('heading')).toHaveTextContent('Sign Up')
})
