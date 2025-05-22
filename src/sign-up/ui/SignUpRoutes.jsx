import { Route, Routes } from 'react-router'
import { SignUp } from './pages/SignUp'
import { AdditionalInfo } from './pages/AdditionalInfo'
import { Confirmation } from './pages/Confirmation'
import { Success } from './pages/Success'
import { SignUpError } from './pages/SignUpError'

export const SignUpRoutes = () => {
  return (
    <Routes>
      <Route index element={<SignUp />} />
      <Route path="/more-info" element={<AdditionalInfo />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/success" element={<Success />} />
      <Route path="/error" element={<SignUpError />} />
    </Routes>
  )
}
