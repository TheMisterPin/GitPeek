import { useGitHub } from '../../../hooks/githubContext'
import { locationIcon, repoIcon, starIcon } from '../../images'
import { Info } from '../layout'
import { Icon, InfoElement, TextBig } from '../ui'

function UserInfo() {
  const { userDetails } = useGitHub()

  return (
    <Info>
      <InfoElement className="flex">
        <Icon src={locationIcon} />
        <TextBig>{userDetails?.location}</TextBig>
      </InfoElement>
      <InfoElement className="flex">
        <Icon src={starIcon} />
        <TextBig className="pb-2">{userDetails?.starsReceived}</TextBig>
      </InfoElement>
      <InfoElement className="flex">
        <Icon src={repoIcon} />
        <TextBig className="pb-2">{userDetails?.public_repos}</TextBig>
      </InfoElement>
    </Info>
  )
}

export default UserInfo
