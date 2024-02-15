import { useGitHub } from '../../../hooks/githubContext'
import { PageTitle } from '../ui'
import { Card, Avatar } from './Card'

function UserCard() {
  const { userDetails } = useGitHub()

  return (
    (
      userDetails
        ? (
          <Card>
            <Avatar src={userDetails.avatarUrl} />
            <PageTitle>{userDetails.login}</PageTitle>

          </Card>
        )
        : null
    )
  )
}

export default UserCard
