import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Printpage from './Printpage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Printpage/>
  </StrictMode>,
)
