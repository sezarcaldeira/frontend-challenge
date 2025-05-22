import { createRoot } from 'react-dom/client'
import App from './App'

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div')
  const root = createRoot(div)

  root.render(<App />)
  root.unmount(div)
})
