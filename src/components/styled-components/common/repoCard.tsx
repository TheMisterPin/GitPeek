import { issueIcon, repoIcon, starIcon } from '../../images'
import { RepoContainer } from '../layout'
import {
  Icon, InfoElement, TextBig, TextMed,
} from '../ui'

function RepoCard(repo: Repository) {
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
        <Icon className="w-[10%]" src={`https://skillicons.dev/icons?i=${language}`} />

        <TextMed>{issuesCount}</TextMed>

        <TextMed>{stargazersCount}</TextMed>
      </InfoElement>
    </RepoContainer>
  )
}

export default RepoCard
