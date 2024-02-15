/* eslint-disable react/jsx-props-no-spreading */
import {
  PageContainer, PageTitle, RepoCard, Shadow, UserCard, UserInfo,
} from '../components'

import { RepoGrid } from '../components/styled-components/ui'
import { useGitHub } from '../hooks/githubContext'

export default function ResultsPage() {
  const { repositories } = useGitHub()

  return (
    <PageContainer>
      <Shadow className="top-2"><UserCard /></Shadow>
      <UserInfo />
      <PageTitle className="absolute xl:top-64 top-72">
        REPOSITORIES
      </PageTitle>
      <RepoGrid>
        {repositories.map((repository) => (
          <RepoCard key={repository.id} {...repository} />
        ))}
      </RepoGrid>
    </PageContainer>
  )
}
