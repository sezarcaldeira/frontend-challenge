import { BrowserRouter } from 'react-router'
import { SignUpRoutes } from '../sign-up/ui/SignUpRoutes'

import './styles/reset.css'
import './styles/app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <SignUpRoutes />
    </BrowserRouter>
  )
}
