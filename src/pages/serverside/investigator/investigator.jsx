import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ui from './ui.jsx'
import './invConsole.html'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ui />
    </StrictMode>,
)