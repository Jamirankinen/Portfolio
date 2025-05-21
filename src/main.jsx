// main.jsx
import React from 'react'
import App from './App'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource/outfit'
import '@fontsource/roboto'

// Export createApp in vite-ssg format
export const createApp = () => {
  return {
    app: (
      <HelmetProvider>
        <App />
      </HelmetProvider>
    ),
  }
}
