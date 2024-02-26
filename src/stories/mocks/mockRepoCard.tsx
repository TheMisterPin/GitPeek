/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/naming-convention */

import { TextBig } from '../../components'
import { Icon, TextMed } from '../../components/styled-components/ui'
import { MockRepo } from './mockProps'
import {
  issueIcon, repoIcon, starIcon,
} from '../../components/images'
import { InfoElement } from './mockResultsPage'
import { RepoContainer } from '../../components/styled-components/layout'

function MockRepoCard(repo: MockRepo) {
  const {
    name, description, language, issuesCount, stargazersCount,
  } = repo

  return (
    <RepoContainer>
      <InfoElement>
        <Icon className="w-[15%]" src={repoIcon} />
        <TextBig className="w-[85%]">
          {' '}
          {name}
        </TextBig>
      </InfoElement>
      <InfoElement>
        <TextMed>
          {' '}
          {description}
        </TextMed>

      </InfoElement>
      <InfoElement>
        <Icon className="w-[10%]" src={starIcon} />

        <TextMed>{language}</TextMed>
        <Icon className="w-[10%]" src={issueIcon} />

        <TextMed>{issuesCount}</TextMed>

        <TextMed>{stargazersCount}</TextMed>
      </InfoElement>
    </RepoContainer>
  )
}

export default MockRepoCard
