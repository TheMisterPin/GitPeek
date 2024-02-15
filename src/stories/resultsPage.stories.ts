import { Meta, StoryObj } from '@storybook/react'
import MockResultsPage from './mocks/mockResultsPage'

const meta: Meta<typeof MockResultsPage> = {
  title: 'Components/MockResultsPage',
  component: MockResultsPage,
}

export default meta

export const Default: StoryObj<typeof MockResultsPage> = {}
