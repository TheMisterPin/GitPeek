/* eslint-disable import/no-cycle */
import React, {
  createContext, useContext, useState, useMemo, useEffect,
} from 'react'
import { redirect } from 'react-router-dom'
import { getSuggestions, getUserData } from '../services/apiGraphQl.service'
import handleError from '../utils/errorHandler'

const intialState: GitHubContextType = {
  userDetails: null,
  suggestions: [],
  searchTerm: '',
  setSearchTerm: () => { },
  sliceAndFetch: () => { },
  handleSuggestions: () => { },
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

  // const [languages, setLanguages]= useState<Repository['language'][]>([])

  const fetchUserDetails = async () => {
    try {
      const userData = await getUserData(searchTerm)

      setIsLoading(true)
      setUserDetails(userData)
      setRepositories(userData.repositories)
    } catch (error: any) {
      handleError(error)
    } finally {
      setIsLoading(false)
      redirect('/results')
    }
  }

  useEffect(
    () => {
      if (searchTerm && suggestions) { setSearchTerm(suggestions[0].login) }
      fetchUserDetails()
      redirect('/results')
    },
    [searchTerm],
  )

  const handleSuggestions = async (value: string) => {
    if (value.length > 3) {
      setIsLoading(true)
      const newSuggestions = await getSuggestions(value)

      setIsLoading(false)
      setRepositories([])
      setUserDetails(null)

      setSuggestions(newSuggestions)
    } else {
      setSuggestions([])
    }
  }
  const sliceAndFetch = () => {
    if (searchTerm && suggestions.length === 0) {
      const newSearchTerm = searchTerm.slice(0, -2)

      setSearchTerm(newSearchTerm)
    }
  }
  const value = useMemo(() => ({
    userDetails,
    repositories,
    searchTerm,
    sliceAndFetch,
    setSearchTerm,
    suggestions,
    handleSuggestions,
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
