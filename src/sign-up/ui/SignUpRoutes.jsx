import { Route, Routes } from 'react-router'
import { SignUp } from './pages/SignUp'
import { AdditionalInfo } from './pages/AdditionalInfo'
import { Confirmation } from './pages/Confirmation'
import { Success } from './pages/Success'
import { SignUpError } from './pages/SignUpError'
import { TermsAndConditions } from './pages/TermsAndConditions'
import { SignUpContextProvider } from './SignUpContext'

export const SignUpRoutes = () => {
  return (
    <SignUpContextProvider>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="/more-info" element={<AdditionalInfo />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<SignUpError />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </SignUpContextProvider>
  )
}
