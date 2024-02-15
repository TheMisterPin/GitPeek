import {
  PageContainer, SearchBar, Shadow, TextBig, UserCard,
} from '../components'
import { useGitHub } from '../hooks/githubContext'

import { logo } from '../utils/images'

export default function HomePage() {
  const { userDetails } = useGitHub()

  // Directly return the conditional rendering result
  return userDetails ? (
    <PageContainer>
      <img src={logo} alt="GitPeek logo" />
      <Shadow className="top-[45%]">
        <TextBig>Look up users in GitHub</TextBig>
        <SearchBar />
      </Shadow>
      <Shadow className="bottom-20 w-[61%] gap-10 h-[25%]">
<UserCard/>
        {/* {suggestions.map((suggestion) => (
          <TextBig key={suggestion.login} className="z-20">{suggestion.login}</TextBig>
        ))} */}
      </Shadow>
    </PageContainer>
  ) : (
    <PageContainer>
      <img src={logo} alt="GitPeek logo" />
      <Shadow className="top-[45%]">
        <TextBig>Look up users in GitHub</TextBig>
        <SearchBar />
      </Shadow>
    </PageContainer>
  )
}
