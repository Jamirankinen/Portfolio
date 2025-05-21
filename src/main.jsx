// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource/outfit'
import '@fontsource/roboto'

// Export createApp in vite-ssg format
ReactDOM.createRoot(document.getElementById('root')).render(
      <HelmetProvider>
        <App />
      </HelmetProvider>

);