import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { getUserDetails, getUserRepos } from './services/apicalls'
import SearchBar from './components/searchbar'

function App() {
  const [userDetails, setUserDetails] = useState<UserGH | null>(null)
  const [userRepos, setUserRepos] = useState<Repository[] | null>(null)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getUserDetails()

        if (data) {
          setUserDetails(data)
        } else {
          toast.error('Failed to retrieve user details. Please try again later.')
        }
      } catch (error) {
        console.error('An error occurred while fetching user details:', error)
        toast.error('An error occurred while fetching user details. Please try again later.')
      }
    }

    fetchUserDetails()
  }, [])

  useEffect(() => {
    const fetchUserRepos = async () => {
      try {
        const repos = await getUserRepos()

        if (repos) {
          setUserRepos(repos)
        } else {
          toast.error('Failed to retrieve user repositories. Please try again later.')
        }
      } catch (error) {
        console.error('An error occurred while fetching user repositories:', error)
        toast.error('An error occurred while fetching user repositories. Please try again later.')
      }
    }

    fetchUserRepos()
  }, [])

  if (!userDetails || !userRepos) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <SearchBar />
      <h2>User Details</h2>
      <p>
        Username:
        {' '}
        {userDetails.login}
      </p>
      <p>
        Name:
        {' '}
        {userDetails.name}
      </p>
      <img className="h-24" src={userDetails.avatar_url} alt="Avatar" />
      <p>
        Bio:
        {' '}
        {userDetails.bio ?? 'N/A'}
      </p>
      <p>
        Followers:
        {' '}
        {userDetails.followers}
      </p>
      <p>
        Following:
        {' '}
        {userDetails.following}
      </p>
      <p>
        Public Repositories:
        {' '}
        {userDetails.public_repos}
      </p>

      <h2>User Repositories</h2>
      <ul>
        {userRepos.map((repo) => (
          <li key={repo.id}>
            {repo.name}
            {repo.language}
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  )
}

export default App
