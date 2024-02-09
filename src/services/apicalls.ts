import axios from 'axios'
import { toast } from 'react-toastify'

export const getUserDetails = async (): Promise<UserGH | null> => {
  const url = import.meta.env.VITE_API_URL
  const username = 'IgnacioVelaz'

  try {
    const response = await axios.get(`${url}/users/${username}`)

    if (response.status === 200) {
      const userData = response.data
      const transformedUserData: UserGH = {
        login: userData.login,
        id: userData.id,
        name: userData.name ?? '',
        avatar_url: userData.avatar_url,
        bio: userData.bio ?? '',
        followers: userData.followers ?? 0,
        following: userData.following ?? 0,
        public_repos: userData.public_repos ?? 0,
      }

      return transformedUserData
    }

    toast.error('Failed to retrieve user details. Please try again later.')

    return null
  } catch (error) {
    toast.error('An error occurred while fetching user details. Please try again later.')

    return null
  }
}

export const getUserRepos = async (username : string): Promise<Repository[] | null> => {
  const url = import.meta.env.VITE_API_URL

  try {
    const response = await axios.get<Repository[]>(
      `${url}/users/${username}/repos`,
    )

    if (response.status === 200) {
      return response.data
    }
    toast.error('Failed to retrieve user repos. Please try again later.')

    return null
  } catch (error) {
    console.error('An error occurred while fetching user repos:', error)
    toast.error(
      'An error occurred while fetching user repos. Please try again later.',
    )

    return null
  }
}
