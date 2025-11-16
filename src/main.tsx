import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CronoProvider } from './context/CronoContex.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <CronoProvider>
    <App />
    </CronoProvider>  
  </StrictMode>,
  </BrowserRouter>
)
