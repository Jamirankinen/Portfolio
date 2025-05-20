import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from "react-helmet-async";

import '@fontsource/outfit'
import '@fontsource/roboto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>,
)
