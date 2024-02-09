interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface UserGH {
  login: 'string'
  id: 'number'
  name: 'string'
  avatar_url: 'string'
  bio?: 'string'
  followers?: 'number'
  following?: 'number'
  public_repos?: 'number'
  repositories: Repository[]
}

interface Repository {
  id:'number'
  name: 'string'
  description: 'string'
  html_url: 'string'
  branches: Branch[]
  commits: Commit[]
  stargazers_count: 'number'
  forks_count: 'number'
  language: 'string'
}

interface Branch {
  name: 'string'
}

interface Commit {
  sha: 'string'
}

interface GitHubContextType {
  searchUser: (username: string) => Promise<void>;
  userDetails: UserGH | null;
  suggestion: strig[] | [];
  fecthSuggerstion: (value: string) => Promise<void>;
  repositories: Repository[];
  selectUser: (username: string) => Promise<void>;
}
