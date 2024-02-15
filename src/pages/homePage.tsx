import {
  LogoImage,
  PageContainer, SearchBar, Shadow, TextBig,
} from '../components'
import ResultsButton from '../components/styled-components/ui/resultsButton'
import { useGitHub } from '../hooks/githubContext'

export default function HomePage() {
  const { userDetails } = useGitHub()

  // Directly return the conditional rendering result
  return userDetails ? (
    <PageContainer>
      <LogoImage />
      <Shadow className="top-[45%] xl:top-12">
        <TextBig>Look up users in GitHub</TextBig>
        <SearchBar />
      </Shadow>

      <ResultsButton />

    </PageContainer>
  ) : (
    <PageContainer>
      <LogoImage />
      <Shadow className="top-[45%] xl:top-12">
        <TextBig>Look up users in GitHub</TextBig>
        <SearchBar />
      </Shadow>
    </PageContainer>
  )
}
