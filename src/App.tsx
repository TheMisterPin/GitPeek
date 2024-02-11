import SearchBar from './components/searchbar'
import RepoList from './components/repositoriesList'
import UserCard from './components/userCard'
import { GitHubProvider } from './hooks/githubContext'

function App() {
  return (

    <GitHubProvider>
      <SearchBar />
      <UserCard />
      <RepoList />
    </GitHubProvider>

  )
}

export default App
