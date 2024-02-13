import { BrowserRouter } from 'react-router-dom'

import { GitHubProvider } from './hooks/githubContext'
import AppRouter from './routes/appRouter'

function App() {
  return (

    <GitHubProvider>
      <BrowserRouter>
        {' '}
        <AppRouter />
      </BrowserRouter>

    </GitHubProvider>

  )
}

export default App
