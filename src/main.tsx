// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UpdateStatusProvider from './contexts/update-status.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <UpdateStatusProvider>
      <App />
    </UpdateStatusProvider>
  // </React.StrictMode>,
)
