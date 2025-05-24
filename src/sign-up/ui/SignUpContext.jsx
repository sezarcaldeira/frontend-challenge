import { createContext, useCallback, useContext, useState } from 'react'

const SignUpContext = createContext({})

const initialState = {
  name: '',
  email: '',
  password: '',
  color: '',
  terms: false,
}

export const SignUpContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  const reset = useCallback(() => {
    setState(initialState)
  }, [])

  return (
    <SignUpContext.Provider value={{ state, setState, reset }}>
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
