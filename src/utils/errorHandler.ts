import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const handleError = (error: AxiosError) => {
  if (error.response) {
    toast.error(
      `GitHub API Error: ${error.response.status} - ${error.message}`,
    )
  } else if (error.request) {
    console.error('Request:', error.request)
    toast.error(
      'No response from GitHub API. Please check your network connection.',
    )
  } else {
    console.error('Error:', error.message)
    toast.error(`An error occurred: ${error.message}`)
  }
  console.error('Config:', error.config)
}

export default handleError
