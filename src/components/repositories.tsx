import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { useGitHub } from '../context/githubContext'

function Repositories() {
  
  return (

    <div>
      <SearchBar />
      <h2>User Details</h2>
      <p>
        Username:
        {userDetails.login}
      </p>
      <p>
        Name:
        {userDetails.name}
      </p>
      <img src={userDetails.avatar_url} alt="Avatar" />
      <p>
        Bio:
        {userDetails.bio}
      </p>
      <p>
        Followers:
        {userDetails.followers}
      </p>
      <p>
        Following:
        {userDetails.following}
      </p>
      <p>
        Public Repositories:
        {userDetails.public_repos}
      </p>
      <ToastContainer />
    </div>
  )
}

export default App

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [repositories, setRepositories] = useState<RepositoryGH[]>([])
  const fetchSuggestions = async (value: string) => {
    if (value.length > 4 && value.length % 2 === 0) {
      try {
        const response = await axios.get(`https://api.github.com/search/users?q=${value}`)

        if (response.status === 200) {
          const users = response.data.items.map((user: any) => user.login)

          setSuggestions(users.slice(0, 6))
        }
      } catch (error) {
        console.error('An error occurred while fetching suggestions:', error)
      }
    } else {
      setSuggestions([])
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setSearchTerm(value)
    fetchSuggestions(value)
  }

  const handleSearch = () => {
    if (searchTerm.length >= 3) {
      console.log('Performing search for:', searchTerm)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a GitHub user..."
      />
      <button type="button" onClick={handleSearch}>Search</button>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((user, index) => (
            <li key={index} onClick={() => setSearchTerm(user)}>
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
