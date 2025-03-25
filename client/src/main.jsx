//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import App from './App.jsx'
import { StrictMode } from 'react';

//! REMOVE THE STRICT MODE FOR THE PROJECT DEFENSE
createRoot(document.getElementById('root')).render(
     <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </StrictMode> 
)
