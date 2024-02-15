import {
  PageContainer, PageTitle, Shadow, TextBig,
} from '../components'
import SearchButton from '../components/styled-components/ui/searchButton'

export default function HomePage() {
  return (

    <PageContainer>
      <Shadow>
        <PageTitle> GitPeek </PageTitle>
        <TextBig> Look up users in  GitHub </TextBig>

        <SearchButton />

      </Shadow>
    </PageContainer>
  )
}
