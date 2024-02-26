import { Meta, StoryObj } from '@storybook/react'
import MockRepoCard from './mocks/mockRepoCard'

const meta: Meta<typeof MockRepoCard> = {
  title: 'Components/MockRepoCard',
  component: MockRepoCard,
}

export default meta

export const Default: StoryObj<typeof MockRepoCard> = {}
