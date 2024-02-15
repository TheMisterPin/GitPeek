import { Meta, StoryObj } from '@storybook/react'
import MockHomePage from './mocks/mockHomePage'

const meta: Meta<typeof MockHomePage> = {
  title: 'Pages/MockHomePage',
  component: MockHomePage,
}

export default meta

type MockUserCardStory = StoryObj<typeof MockHomePage>

export const Default: MockUserCardStory = {}
