import { BrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SignUpRoutes } from '../sign-up/ui/SignUpRoutes'
import ErrorBoundary from '~/sign-up/ui/ErrorBoundary'

import './styles/reset.css'
import './styles/app.css'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SignUpRoutes />
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
