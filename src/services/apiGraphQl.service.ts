import axios from 'axios'
import { toast } from 'react-toastify'
// Call to the GH GraphSQL api
const getApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `bearer ${import.meta.env.VITE_API_KEY}`,
    'Content-Type': 'application/json',
  },
})
// Queries

const searchQuery = `
query getUserData($login: String!) {
  user(login: $login) {
    login
    id
    name
    avatarUrl
    bio
    location
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}, ownerAffiliations: OWNER) {
      totalCount
      edges {
        node {
          id
          name
          description
          url
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          primaryLanguage {
            name
          }
          owner {
            login
            id
          }
        }
      }
    }
    starredRepositories {
      totalCount
    }
  }
}
`

const suggestionQuery = `
query getUserSuggestions($login: String!) {
  search(query: $login, type: USER, first: 5) {
    edges {
      node {
        ... on User {
          login
          avatarUrl
          name
        }
      }
    }
  }
}
`

export const getSearchTerm = async (user: string): Promise<UserGH> => {
  try {
    const response = await getApi.post('', {
      query: searchQuery,
      variables: {
        login: user,
      },
    })

    const userData = response.data.data.user

    // Map the response to the UserGH interface
    const userDetails: UserGH = {
      login: userData.login,
      id: userData.id,
      name: userData.name,
      location: userData.location,
      avatar_url: userData.avatarUrl,
      bio: userData.bio,
      followers: userData.followers.totalCount,
      following: userData.following.totalCount,
      public_repos: userData.repositories.totalCount,
      repositories: userData.repositories.edges.map(
        ({ node }: { node: RepositoryNode }) => ({
          id: node.id,
          name: node.name,
          description: node.description,
          html_url: node.url,
          owner: {
            login: node.owner.login,
            id: node.owner.id,
          },
          stargazers_count: node.stargazers.totalCount,
          forks_count: node.forks.totalCount,
          language: node.primaryLanguage
            ? node.primaryLanguage.name
            : 'Unknown',
        }),
      ),
      starredRepositories: userData.starredRepositories.totalCount,
      starsRecieved: userData.repositories.edges.reduce(
        (acc: number, { node }: { node: RepositoryNode }) => acc + node.stargazers.totalCount,
        0,
      ),
    }

    return userDetails
  } catch (error: any) {
    toast.error('Error calling GitHub GraphQL API:', error.message)
    throw error
  }
}

export const getSuggestions = async (
  login: string,
): Promise<Array<Suggestion>> => {
  try {
    const response = await getApi.post('', {
      query: suggestionQuery,
      variables: { login },
    })

    const suggestions = response.data.data.search.edges.map(
      ({ node }: any) => ({
        login: node.login,
        avatarUrl: node.avatarUrl,
        name: node.name,
      }),
    )

    return suggestions
  } catch (error: any) {
    toast.error('Error calling GitHub GraphQL API:', error.message)
    throw error
  }
}
