import { useGitHub } from '../hooks/githubContext' // Adjust the import path as needed

function SearchBar() {
  const { loadSuggestions, setSearchTerm } = useGitHub()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value) {
      loadSuggestions(value)
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
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
