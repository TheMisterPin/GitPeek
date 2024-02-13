interface RepoCardProps {
  repository: Repository
}

function MockRepoCard({ repository }: RepoCardProps) {
  return (
    <li>
      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
        {repository.name}
      </a>
      <p>
        {' '}
        {repository.issues_count}
      </p>
      <p>
        {' '}
        {repository.issues_count}
      </p>
      <p>{repository.description}</p>
      <p>{repository.language}</p>
      <img src={`https://skillicons.dev/icons?i=${repository.language.toLowerCase()}`} className="bg-black" alt={`Icon for ${repository.language}`} />
      <p>
        ⭐
        {repository.stargazers_count}
      </p>

    </li>
  )
}

export default MockRepoCard

    function undefined({}) {
      return (<p>
        {' '}
        {repository.issues_count}
      </p>);
    }
  