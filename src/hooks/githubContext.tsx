import React, {
  createContext, useContext, useState, useMemo, useEffect,
} from 'react'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { getSuggestions, getSearchTerm } from '../services/apiGraphQl.service'
import handleError from '../utils/errorHandler'

const intialState: GitHubContextType = {
  userDetails: null,
  suggestions: [],
  searchTerm: '',
  setSearchTerm: () => { },
  loadSuggestions: () => { },
  repositories: [],
  isLoading: false,
}

const GitHubContext = createContext<GitHubContextType>(intialState)

export function GitHubProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [userDetails, setUserDetails] = useState<UserGH | null>(null)
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  // const [languages, setLanguages]= useState<Repository['language'][]>([])

  const fetchUserDetails = async () => {
    try {
      const userData = await getSearchTerm(searchTerm)

      setIsLoading(true)
      setUserDetails(userData)
      setRepositories(userData.repositories)
    } catch (error : any) {
      handleError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (searchTerm) {
      switch (suggestions.length) {
        case 0:
          navigate('/error')
          break
        case 1:
          fetchUserDetails()
          navigate('/results')
          break
        default:
          navigate('/suggestion')
          break
      }
    }
  }, [searchTerm])

  const loadSuggestions = debounce(async (value: string) => {
    if (value.length > 0) {
      setIsLoading(true)
      const newSuggestions = await getSuggestions(value)

      setIsLoading(false)
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
    isLoading,
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
