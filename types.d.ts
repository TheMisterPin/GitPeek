interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Objects from the graphQL API

interface SuggestionNode {
  login: string;
  avatarUrl: string;
  name: string;
  location?: string;
}
interface UserNode {
  login: string;
  id: string;
  name: string;
  avatarUrl: string;
  bio?: string;
  location?: string;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  repositories: {
    totalCount: number;
    edges: Array<{
      node: RepositoryNode;
    }>;
  };
  object: {
    text?: string;
  };
  starredRepositories: {
    totalCount: number;
  };
}

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
  issues: {
    totalCount: number;
  };
  object: {
    text?: string;
  };
  primaryLanguage?: {
    name: string;
  };
  owner: {
    login: string;
    id: string;
    avatarUrl: string;
  };
}

interface UserGH {
  login: string;
  id: string;
  name: string;
  avatarUrl: string;
  bio?: string;
  location?: string;
  followers?: number;
  readme?: string;
  following?: number;
  public_repos?: number;
  repositories: Repository[];
  starredRepositories: number;
  starsReceived: number;
}
type Suggestion = {
  login: string;
  avatarUrl: string;
  location: string;
}
interface Repository {
  id: string;
  name: string;
  html_url: string;
  description: string;
  owner: Pick<UserNode, 'login' | 'name' | 'avatarUrl'>;
  commits?: number;
  stargazers_count?: number;
  forks_count?: number;
  issues_count?: number;
  readme?: string;
  language: string;
}

interface GitHubContextType {
  userDetails: UserGH | null;
  suggestions: Suggestion[] | [];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSuggestions: (term: string) => void;
  repositories: Repository[];
  isLoading: boolean;
}
