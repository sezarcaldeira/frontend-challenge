import '@testing-library/jest-dom'
import { mockServer } from '~/mock/server'
import { requestLog } from '~/mock/handlers'

beforeAll(() => mockServer.listen())
afterEach(() => {
  mockServer.resetHandlers()
  requestLog.reset()
})
afterAll(() => mockServer.close())
