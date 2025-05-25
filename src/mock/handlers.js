import { http, HttpResponse } from 'msw'
import { API_URL } from '~/shared/infra/httpClient'

import { colorsStub } from '~/sign-up/infra/__fixtures__/colorsFixtures'

export const requestLog = {
  get: [],
  post: [],
  reset: () => {
    requestLog.get = []
    requestLog.post = []
  },
}

export const handlers = [
  http.get(`${API_URL}/colors`, async () => {
    requestLog.get.push({})

    return HttpResponse.json(colorsStub)
  }),

  http.post(`${API_URL}/submit`, async ({ request }) => {
    const body = await request.json()
    requestLog.post.push(body)

    return HttpResponse.json({ ok: true })
  }),
]

export const failureHandlers = {
  colors: http.get(`${API_URL}/colors`, async () => {
    requestLog.get.push({})

    return HttpResponse.networkError('Failed to connect')
  }),

  submit: http.post(`${API_URL}/submit`, async ({ request }) => {
    const body = await request.json()
    requestLog.post.push(body)

    return HttpResponse.networkError('Failed to connect')
  }),
}
