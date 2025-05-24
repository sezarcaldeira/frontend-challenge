import axios from 'axios'

const createHttpClient = () => {
  const client = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return client
}

export const httpClient = createHttpClient()
