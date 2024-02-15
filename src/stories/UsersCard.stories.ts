// src/stories/MockUserCard.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import MockUserCard from './mocks/mockUserCard'

const meta: Meta<typeof MockUserCard> = {
  title: 'Components/MockUserCard',
  component: MockUserCard,
  args: {
    user: {
      avatarUrl: 'https://example.com/avatar.jpg',
      name: 'Default User',
      login: 'defaultuser',
      location: 'Internet',
      public_repos: 10,
      starredRepositories: 5,
      bio: 'Just a default user.',
      followers: 100,
      following: 50,
      id: '1',
      repositories: [],
      starsReceived: 23,
    },
  },
}

export default meta

type MockUserCardStory = StoryObj<typeof MockUserCard>

export const Default: MockUserCardStory = {}

export const CustomUser: MockUserCardStory = {
  args: {
    user: {
      avatarUrl: 'https://example.com/custom-avatar.jpg',
      name: 'Custom User',
      login: 'customuser',
      location: 'Somewhere',
      public_repos: 20,
      starredRepositories: 10,
      bio: 'A more customized user.',
      followers: 200,
      following: 100,
      id: '2',
      repositories: [],
      starsReceived: 5,
    },
  },
}
