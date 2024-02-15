import { forkIcon, repoIcon, starIcon } from '../../images'
import { FlexBox } from '../layout'
import {
  Icon, InfoElement, TextBig, TextMed,
} from '../ui'

function RepoCard(repo: Repository) {
  const {
    language, name, forksCount, stargazersCount,
  } = repo

  return (
    <FlexBox className="h-24 w-full px-10">
      <InfoElement>
        <Icon className="max-h-10" src={repoIcon} />
        {' '}
        {' '}
        <TextBig>{name}</TextBig>
        <Icon className="max-h-12 p-2" src={`https://skillicons.dev/icons?i=${language}`} />
      </InfoElement>
      <InfoElement>
        <InfoElement className="flex">
          <Icon className="max-h-8 mb-12" src={starIcon} />
          <TextMed>{stargazersCount}</TextMed>
        </InfoElement>
        <InfoElement className="flex">
          <Icon className="max-h-7" src={forkIcon} />
          <TextMed className="pb-2">{forksCount}</TextMed>
        </InfoElement>
      </InfoElement>
    </FlexBox>
  )
}

export default RepoCard
