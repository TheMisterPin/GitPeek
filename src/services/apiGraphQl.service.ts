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
    object(expression: "HEAD:README.md") {
            ... on Blob {
              text
            }
          }
    repositories(first: 10, orderBy: {field: STARGAZERS, direction: DESC}, ownerAffiliations: OWNER) {
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
          issues(states: OPEN) {
            totalCount
          }
          object(expression: "HEAD:README.md") {
            ... on Blob {
              text
            }
          }
          primaryLanguage {
            name
          }
          owner {
            login
            id
            avatarUrl
          }
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 1) {
                  totalCount
                  edges {
                    node {
                      author {
                        user {
                          login
                        }
                      }
                    }
                  }
                }
              }
            }
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
const adaptUserNodeToUserGH = (userNode: UserNode): UserGH => ({
  login: userNode.login,
  id: userNode.id,
  name: userNode.name,
  avatar_url: userNode.avatarUrl,
  bio: userNode.bio,
  location: userNode.location,
  followers: userNode.followers.totalCount,
  following: userNode.following.totalCount,
  readme: userNode.object?.text || '',
  public_repos: userNode.repositories.totalCount,
  repositories: userNode.repositories.edges.map(({ node }) => ({
    id: node.id,
    name: node.name,
    description: node.description,
    html_url: node.url,
    owner: {
      login: node.owner.login,
      id: node.owner.id,
      avatar_url: node.owner.avatarUrl,
      name: node.owner.login,
    },
    stargazers_count: node.stargazers.totalCount,
    forks_count: node.forks.totalCount,
    issues_count: node.issues.totalCount,
    readme: node.object?.text || '',
    language: node.primaryLanguage ? node.primaryLanguage.name : 'Unknown',
  })),
  starredRepositories: userNode.starredRepositories.totalCount,
  starsReceived: userNode.repositories.edges.reduce(
    (acc, { node }) => acc + node.stargazers.totalCount,
    0,
  ),
})

export const getSearchTerm = async (user: string): Promise<UserGH> => {
  try {
    const response = await getApi.post<{ data: { user: UserNode } }>(
      'graphql',
      {
        query: searchQuery,
        variables: { login: user },
      },
    )

    if (!response.data.data.user) {
      throw new Error('User not found.')
    }

    const userNode: UserNode = response.data.data.user

    // Adapt UserNode to UserGH
    const userDetails: UserGH = adaptUserNodeToUserGH(userNode)

    return userDetails
  } catch (error: any) {
    toast.error(`Error calling GitHub GraphQL API: ${error.message}`)
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
      (node: SuggestionNode) => ({
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