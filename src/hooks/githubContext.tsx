import React, {
  createContext, useContext, useState, useMemo, useEffect,
} from 'react'
import { debounce } from 'lodash'
import { getSuggestions, getSearchTerm } from '../services/apiGraphQl.service'

const intialState: GitHubContextType = {
  userDetails: null,
  suggestions: [],
  searchTerm: '',
  setSearchTerm: () => { },
  loadSuggestions: () => { },
  repositories: [],
}

const GitHubContext = createContext<GitHubContextType>(intialState)

export function GitHubProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [userDetails, setUserDetails] = useState<UserGH | null>(null)
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])

  useEffect(() => {
    if (searchTerm) {
      const fetchUserDetails = async () => {
        try {
          const userData = await getSearchTerm(searchTerm)

          setUserDetails(userData)
          console.log(userData)
          setRepositories(userData.repositories)
        } catch (error) {
          console.error('Failed to fetch user details:', error)
        }
      }

      fetchUserDetails()
    }
  }, [searchTerm])

  const loadSuggestions = debounce(async (value: string) => {
    if (value.length > 0) { // Assuming you want to load suggestions after the 4th character
      const newSuggestions = await getSuggestions(value)

      setRepositories([])
      setUserDetails(null)

      setSuggestions(newSuggestions)
    } else {
      setSuggestions([])
    }
  }, 300)

  const value = useMemo(() => ({
    userDetails,
    repositories,
    searchTerm,
    setSearchTerm,
    suggestions,
    loadSuggestions,
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
