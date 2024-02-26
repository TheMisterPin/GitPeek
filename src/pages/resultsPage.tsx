/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom'
import {
  PageContainer, PageTitle, RepoCard, TextBig, UserCard, UserInfo,
} from '../components'
import { useGitHub } from '../hooks/githubContext'
import { RedBox, RepoGrid } from '../components/styled-components/layout'
import { homeIcon } from '../components/images'
import { Icon } from '../components/styled-components/ui'
import { HOME } from '../routes/paths'

export default function ResultsPage() {
  const { repositories, userDetails } = useGitHub()

  return userDetails ? (

    <PageContainer className="flex flex-col">
      <UserCard />
      <UserInfo />
      <PageTitle>
        REPOSITORIES
      </PageTitle>
      <RepoGrid className="w-4/5">
        {repositories.map((repo) => (
          // could also wrap into another
          //  BUT
          //  I'll have to change the li of the RepoCard for better HTML semantics
          <RepoCard key={repo.id} {...repo} />
        ))}
      </RepoGrid>
    </PageContainer>
  ) : (
    <PageContainer>
      <RedBox>
        <PageTitle>Uups</PageTitle>
        <TextBig>
          Seems like Nothing to see here!
        </TextBig>
        <Link to={HOME}>
          <Icon src={homeIcon} className="h-36" />
        </Link>

      </RedBox>
    </PageContainer>
  )
}
