import tw from 'twin.macro'
import {
  PageContainer, PageTitle, Shadow, TextBig, UserCard,
} from '../../components'
import {
  forkIcon, locationIcon, repoIcon, starIcon,
} from '../../components/images'
import { FlexBox, Info } from '../../components/styled-components/layout/index'
import { TextMed } from '../../components/styled-components/ui'

export const Icon = tw.img`

mt-1

object-contain
`
export const InfoElement = tw.div`
text-center
justify-around
flex`
export const RepoGrid = tw.div` w-[85%] grid grid-cols-3 gap-4 absolute bottom-24`

export default function MockResultsPage() {
  return (
    <PageContainer>
      <Shadow className="top-2"><UserCard /></Shadow>
      <Info className="top-44 h-[60px] w-2/5 flex justify-between px-8">
        <InfoElement className="flex">
          <Icon src={locationIcon} />
          <TextBig>Granada,Spain</TextBig>
        </InfoElement>
        <InfoElement className="flex">
          <Icon src={starIcon} />
          <TextBig className="pb-2">23</TextBig>
        </InfoElement>
        <InfoElement className="flex">
          <Icon src={repoIcon} />
          <TextBig className="pb-2">15</TextBig>
        </InfoElement>
      </Info>
      <PageTitle className="absolute top-64">
        REPOSITORIES
      </PageTitle>
      <RepoGrid>
        <FlexBox className="h-24 w-full px-10">
          <InfoElement>
            <Icon className="max-h-10" src={repoIcon} />
            {' '}
            {' '}
            <TextBig>MovieCentral</TextBig>
            <Icon className="max-h-12 p-2" src="https://skillicons.dev/icons?i=typescript" />
          </InfoElement>
          <InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-8 mb-12" src={starIcon} />
              <TextMed>23</TextMed>
            </InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-7" src={forkIcon} />
              <TextMed className="pb-2">15</TextMed>
            </InfoElement>
          </InfoElement>
        </FlexBox>
        <FlexBox className="h-24 w-full px-10">
          <InfoElement>
            <Icon className="max-h-10" src={repoIcon} />
            {' '}
            {' '}
            <TextBig>GitPeek</TextBig>
            <Icon className="max-h-12 p-2" src="https://skillicons.dev/icons?i=typescript" />
          </InfoElement>
          <InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-8 mb-12" src={starIcon} />
              <TextMed>23</TextMed>
            </InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-7" src={forkIcon} />
              <TextMed className="pb-2">15</TextMed>
            </InfoElement>
          </InfoElement>
        </FlexBox>
        <FlexBox className="h-24 w-full px-10">
          <InfoElement>
            <Icon className="max-h-10" src={repoIcon} />
            {' '}
            <TextBig>SoundSphere</TextBig>
            <Icon className="max-h-12 p-2" src="https://skillicons.dev/icons?i=typescript" />
          </InfoElement>
          <InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-8 mb-12" src={starIcon} />
              <TextMed>23</TextMed>
            </InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-7" src={forkIcon} />
              <TextMed className="pb-2">15</TextMed>
            </InfoElement>
          </InfoElement>
        </FlexBox>
        <FlexBox className="h-24 w-full px-10">
          <InfoElement>
            <Icon className="max-h-10" src={repoIcon} />
            {' '}
            <TextBig>Boutique</TextBig>
            <Icon className="max-h-12 p-2" src="https://skillicons.dev/icons?i=typescript" />
          </InfoElement>
          <InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-8 mb-12" src={starIcon} />
              <TextMed>23</TextMed>
            </InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-7" src={forkIcon} />
              <TextMed className="pb-2">15</TextMed>
            </InfoElement>
          </InfoElement>
        </FlexBox>
        <FlexBox className="h-24 w-full px-10">
          <InfoElement>
            <Icon className="max-h-10" src={repoIcon} />
            {' '}
            <TextBig>Memory</TextBig>
            <Icon className="max-h-12 p-2" src="https://skillicons.dev/icons?i=typescript" />

          </InfoElement>
          <InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-8 mb-12" src={starIcon} />
              <TextMed>23</TextMed>
            </InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-7" src={forkIcon} />
              <TextMed className="pb-2">15</TextMed>
            </InfoElement>
          </InfoElement>
        </FlexBox>
        <FlexBox className="h-24 w-full px-10">
          <InfoElement>
            <Icon className="max-h-10" src={repoIcon} />
            {' '}
            <TextBig>To-Do</TextBig>
            <Icon className="max-h-12 p-2" src="https://skillicons.dev/icons?i=typescript" />

          </InfoElement>
          <InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-8 mb-12" src={starIcon} />
              <TextMed>23</TextMed>
            </InfoElement>
            <InfoElement className="flex">
              <Icon className="max-h-7" src={forkIcon} />
              <TextMed className="pb-2">15</TextMed>
            </InfoElement>
          </InfoElement>
        </FlexBox>
      </RepoGrid>
    </PageContainer>
  )
}
