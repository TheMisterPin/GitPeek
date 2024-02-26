/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
import { repositories } from './mockProps'
import MockRepoCard from './mockRepoCard'
import { RepoGrid } from '../../components/styled-components/layout'

function MockRepoList() {
  return (
    <RepoGrid className="w-4/5">
      {repositories.map((repo) => (
        // could also wrap into another
        //  BUT
        //  I'll have to change the li of the RepoCard for better HTML semantics
        <MockRepoCard key={repo.id} {...repo} />
      ))}
    </RepoGrid>
  )
}

export default MockRepoList
