import { createContext, useContext, useState } from 'react'

const SignUpContext = createContext({})

export const SignUpContextProvider = ({ children }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    color: '',
    terms: false,
  })

  return (
    <SignUpContext.Provider value={[state, setState]}>
      {children}
    </SignUpContext.Provider>
  )
}

export const useSignUpContext = () => {
  const context = useContext(SignUpContext)

  if (!context) {
    throw new Error('useSignUpContext must be used within a SignUpProvider')
  }

  return context
}
