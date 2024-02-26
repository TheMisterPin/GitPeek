/* eslint-disable import/no-cycle */
import { Button } from '../..'
import { useGitHub } from '../../../hooks/githubContext'
import { searchIcon } from '../../images'

function SearchBar() {
  const { handleSuggestions, setSearchTerm } = useGitHub()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value) {
      handleSuggestions(value)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchTerm = (e.currentTarget.elements.namedItem('searchInput') as HTMLInputElement).value

    setSearchTerm(searchTerm)
  }

  return (

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchInput"
        onChange={handleChange}
        placeholder="Search GitHub Users..."
      />
      <Button type="submit" icon={searchIcon} />

    </form>
  )
}

export default SearchBar
