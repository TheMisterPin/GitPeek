/* eslint-disable import/no-cycle */
import styled from 'styled-components'
import tw from 'twin.macro'
import {
  PageContainer, PageTitle, TextBig,
} from '../../components'
import {
  locationIcon, repoIcon, starIcon,
} from '../../components/images'
import { FlexBox } from '../../components/styled-components/layout/index'
import { TextMed } from '../../components/styled-components/ui'
import MockRepoList from './mockRepoList'

export const Icon = tw.img`
object-contain
`

export const CardIcon = styled(Icon)`
`

export const InfoElement = tw.div`
text-center
justify-around
flex`

export default function MockResultsPage() {
  return (
    <PageContainer className="flex flex-col">

      <FlexBox className="top-44 h-[60px] w-2/5 flex justify-between px-8">
        <InfoElement className="flex text-ellipsis">
          <Icon src={locationIcon} />
          <TextBig>Granada,Spain</TextBig>
        </InfoElement>
        <InfoElement className="flex">
          <Icon src={starIcon} />
          <TextBig className="pb-2">23</TextBig>
        </InfoElement>
        <InfoElement className="flex">
          <Icon src={repoIcon} />
          <TextMed className="pb-2">15</TextMed>
        </InfoElement>
      </FlexBox>
      <PageTitle>
        REPOSITORIES
      </PageTitle>
      <MockRepoList />
    </PageContainer>
  )
}
