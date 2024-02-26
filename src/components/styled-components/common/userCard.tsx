import { useGitHub } from '../../../hooks/githubContext'
import { FlexBox } from '../layout'
import { PageTitle } from '../ui'
import { Card, Avatar } from './Card'

function UserCard() {
  const { userDetails } = useGitHub()

  return (
    (
      userDetails
        ? (
          <FlexBox>
            <Card>
              <Avatar src={userDetails.avatarUrl} />
              <PageTitle>{userDetails.login}</PageTitle>

            </Card>
          </FlexBox>
        )
        : null
    )
  )
}

export default UserCard
