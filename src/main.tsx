import React from 'react'
import ReactDOM from 'react-dom/client'
import AdoTech from './AdoTech.tsx'
import './index.css'

const rootElement = document.getElementById('root')

if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AdoTech />
    </React.StrictMode>
  )
}
