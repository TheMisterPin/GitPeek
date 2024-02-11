import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GitHubProvider } from './hooks/githubContext'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <GitHubProvider>
      {' '}
      <App />
    </GitHubProvider>
  </React.StrictMode>,
)
