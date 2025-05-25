import axios from 'axios'

export const API_URL = 'http://localhost:3001/api'

const createHttpClient = () => {
  const client = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return client
}

export const httpClient = createHttpClient()
