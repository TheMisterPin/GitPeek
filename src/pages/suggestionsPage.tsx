import { PageContainer } from '../components'
import { useGitHub } from '../hooks/githubContext'

export default function SuggestionPage() {
  const { repositories } = useGitHub()

  return (
    <PageContainer>
      {
        repositories.map((repo) => (
          <div key={repo.id}>{repo.name}</div>))
      }
    </PageContainer>
  )
}
