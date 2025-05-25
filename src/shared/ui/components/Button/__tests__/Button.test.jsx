import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../'

describe('Button component', () => {
  it('renders the button with the given children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('displays a loader when loading prop is true', () => {
    render(<Button loading>Click me</Button>)
    expect(
      screen.getByRole('button', { name: 'loading spinner Loading...' })
    ).toBeInTheDocument()
  })
})
