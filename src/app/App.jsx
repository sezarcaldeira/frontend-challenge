import { BrowserRouter } from 'react-router'
import { SignUpRoutes } from '../sign-up/ui/SignUpRoutes'

import './reset.css'

export const App = () => {
  return (
    <BrowserRouter>
      <SignUpRoutes />
    </BrowserRouter>
  )
}
