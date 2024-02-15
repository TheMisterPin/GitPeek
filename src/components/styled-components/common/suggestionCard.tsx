function SuggestionCard(suggestion : Suggestion) {
  const { avatarUrl, login } = suggestion

  return (
    <div className="h1/6">
      <img src={avatarUrl} alt="Avatar" />
      <h2>{login}</h2>
    </div>
  )
}

export default SuggestionCard
