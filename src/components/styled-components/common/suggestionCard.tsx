import {
  Avatar, Card, CardContent, Typography, Skeleton,
} from '@mui/material'
import { useGitHub } from '../../../hooks/githubContext'

function SuggestionCard(suggestion: Suggestion) {
  const { isLoading } = useGitHub()
  const { login, avatarUrl } = suggestion

  return (
    <Card>
      <Avatar>
        {isLoading ? <Skeleton variant="circular" width={40} height={40} /> : avatarUrl}
      </Avatar>
      <CardContent>
        <Typography variant="subtitle1">
          {isLoading ? <Skeleton width="80%" /> : login}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SuggestionCard
