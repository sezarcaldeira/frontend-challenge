import { QueryClient } from '@tanstack/react-query'

export const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Don't retry failed queries in tests
    },
  },
})
