import RepoList from '../components/repositoriesList'
import SearchBar from '../components/searchbar'
import UserCard from '../components/userCard'

export default function HomePage() {
  return (
    <div>
      welcome to GitPeek
      <SearchBar />
      <UserCard />
      <RepoList />

    </div>
  )
}
