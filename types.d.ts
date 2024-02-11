interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Object in the graphQL API
interface RepositoryNode {
  id: string;
  name: string;
  description: string;
  url: string;
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  primaryLanguage?: {
    name: string;
  };
  owner: {
    login: string;
    id: string;
  };
}

interface UserGH {
  login: string
  id: number
  name: string
  avatar_url: string
  bio?: string
  location?: string
  followers?: number
  following?: number
  public_repos?: number
  repositories: Repository[]
  starredRepositories: number
  starsRecieved : number
}
type Suggestion = Pick<UserGH, 'login' | 'name' | 'avatar_url'>
interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  branches: number
  owner: UserGH
  commits?: number
  stargazers_count?: number
  forks_count?: number
  language: string
}

interface Branch {
  name: string
}

interface GitHubContextType {
  userDetails: UserGH | null;
  suggestions: Suggestion[] | [];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  loadSuggestions: (term: string) => void;
  repositories: Repository[];
}
