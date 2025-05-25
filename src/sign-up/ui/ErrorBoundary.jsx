import React from 'react'
import { Main, Page } from '~/shared/ui/components'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Error caught in ErrorBoundary:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Page>
          <Main>
            <Main.Header>
              <h1>Something went wrong.</h1>
            </Main.Header>
            <Main.Content>
              An error occurred while processing your request. Please try again
              later.
            </Main.Content>
          </Main>
        </Page>
      )
    }

    return this.props.children
  }
}
