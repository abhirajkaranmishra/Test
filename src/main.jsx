import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Printpage from './Printpage';
import PricingCatalog from './pricingCatelog';
import ProfileDetails from './profieDetails';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileDetails/>
    
  </StrictMode>,
)
