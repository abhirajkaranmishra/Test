import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Printpage from './Printpage';
import PricingCatalog from './pricingCatelog';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PricingCatalog/>
  </StrictMode>,
)
