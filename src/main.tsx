import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import Layout from '@/app/layout'
import Providers from '@/app/providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Layout>
        
      </Layout>
    </Providers>
  </StrictMode>,
)
