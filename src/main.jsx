import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TherapyRecordingForm from './TherapyRecordingForm'
import PsychiatricRating from './PsychiatricRating'
import CyBocsRating from "./CyBocsRating"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PsychiatricRating/>
  </StrictMode>,
)
