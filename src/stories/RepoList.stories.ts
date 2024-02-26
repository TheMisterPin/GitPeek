import { Meta, StoryObj } from '@storybook/react'
import MockRepoList from './mocks/mockRepoList'

const meta: Meta<typeof MockRepoList> = {
  title: 'Components/MockRepoList',
  component: MockRepoList,
}

export default meta

export const Default: StoryObj<typeof MockRepoList> = {}
