import React, {
  createContext, useContext, useState, useMemo,
} from 'react'
import axios from 'axios'

const GitHubContext = createContext<GitHubContextType | null>(null)

export function GitHubProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [userDetails, setUserDetails] = useState<UserGH | null>(null)
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [suggestions, setSuggestions] = useState<UserGH[]>([])

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

  const fetchUserAndRepositories = async (username: string) => {
    const userDetailsResponse = await axios.get(`https://api.github.com/users/${username}`)
    let user: UserGH | null = null

    if (userDetailsResponse.status === 200) {
      user = userDetailsResponse.data

      const repositoriesResponse = await axios.get(`https://api.github.com/users/${username}/repos`)

      if (repositoriesResponse.status === 200) {
        const allRepos = repositoriesResponse.data

        user.repositories = allRepos.slice(0, 4)

        setRepositories(allRepos)
      }

      setUserDetails(user)
    }
  }

  const searchUser = async (username: string) => {
    await fetchUserAndRepositories(username)
  }

  const selectUser = async (username: string) => {
    await searchUser(username)
  }

  const value = useMemo(() => ({
    fetchSuggestions,
    suggestions,
    searchUser,
    userDetails,
    repositories, 
    selectUser,
  }), [userDetails, repositories])

  return (
    <GitHubContext.Provider value={value}>
      {children}
    </GitHubContext.Provider>
  )
}

export const useGitHub = () => {
  const context = useContext(GitHubContext)

  if (context === undefined) {
    throw new Error('useGitHub must be used within a GitHubProvider')
  }

  return context
}
