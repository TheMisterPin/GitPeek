/* eslint-disable import/no-cycle */
import { useGitHub } from '../../../hooks/githubContext'
import { RedBox } from '../layout'

function ErrorBox() {
  const { searchTerm } = useGitHub()

  return (
    <RedBox>
      <span>
        sorry we could not find $
        {searchTerm}
      </span>

    </RedBox>
  )
}

export default ErrorBox
