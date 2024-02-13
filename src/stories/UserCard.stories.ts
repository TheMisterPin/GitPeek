import { Meta, StoryObj } from '@storybook/react'
import MockRepoCard from '../mocks/mockRepoCard'

const meta: Meta<typeof MockRepoCard> = {
  title: 'Components/MockRepoCard',
  component: MockRepoCard,
}

export default meta

export const MockRepository: Repository = {
  id: ' 1',
  name: 'Repo One',
  description: 'This is a sample repository',
  html_url: 'https://github.com/example/repo-one',
  owner: {
    name: 'Repository Owner',
    login: 'Mkown23',
    avatar_url: 'https://avatars.githubusercontent.com/u/1234567?v=4',
  },
  commits: 150,
  stargazers_count: 100,
  forks_count: 25,
  language: 'JavaScript',
}

export const Default: StoryObj<typeof MockRepoCard> = {
  args: {
    repository: MockRepository,
  },
}
