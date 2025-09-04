import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdminLayout from './pages/AdminLayout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AdminLayout />
  </StrictMode>,
)
