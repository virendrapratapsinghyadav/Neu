import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../playground/App.tsx'
import { ThemeProvider } from './providers/Theme-provider.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='neu-ui-theme'>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
