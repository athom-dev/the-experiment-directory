import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import Providers from '@/app/providers'
import Routes from './app/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Routes />
    </Providers>
  </StrictMode>,
)
