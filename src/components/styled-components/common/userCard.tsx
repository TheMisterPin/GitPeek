import {
  Card, CardContent, Grid, Typography, CardActionArea, Skeleton,
} from '@mui/material'
import { useGitHub } from '../../../hooks/githubContext'

function UserCard() {
  const { userDetails, isLoading } = useGitHub()

  return (
    <Card sx={{ maxWidth: 345, bgcolor: 'background.paper' }}>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              {isLoading ? (
                <Skeleton variant="circular" width={140} height={140} />
              ) : (
                <img src={userDetails?.avatarUrl} alt={`${userDetails?.login}'s avatar`} style={{ width: '100%', maxWidth: '140px', borderRadius: '50%' }} />
              )}
            </Grid>
            <Grid item xs={12}>
              {isLoading ? (
                <Skeleton width="60%" height={28} />
              ) : (
                <Typography variant="h5" component="div">
                  {userDetails?.login}
                </Typography>
              )}

              {isLoading ? (
                <Skeleton width="80%" />
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Location:
                  {' '}
                  {userDetails?.location}
                </Typography>
              )}

              {isLoading ? (
                <Skeleton width="40%" />
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Repos:
                  {' '}
                  {userDetails?.public_repos}
                </Typography>
              )}

              {/* Repeat for other pieces of information as needed */}
            </Grid>
            <Grid item xs={12}>
              {/* Placeholder for RepoCard components or Skeletons */}
              {/* Implement conditional rendering based on isLoading for RepoCards */}
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default UserCard
