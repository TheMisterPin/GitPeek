import { Meta, StoryObj } from '@storybook/react'
import MockSkeletonPlaceholder from './mocks/mockSkeleton'

const meta: Meta<typeof MockSkeletonPlaceholder> = {
  title: 'Components/SkeletonPlaceholder',
  component: MockSkeletonPlaceholder,
}

export default meta

export const Default: StoryObj<typeof MockSkeletonPlaceholder> = {}
