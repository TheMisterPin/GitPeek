import React, { useState } from 'react'
import axios from 'axios'
import { useGitHub } from '../context/githubContext'
import { getUserDetails } from '../services/apicalls'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { suggestions, fetchSuggestions, } = useGitHub()


  const handleSearchBarChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setSearchTerm(value)
    fetchSuggestions(value)
  }

const handleSearch = () =>{
getUserDetails(searchTerm)
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
