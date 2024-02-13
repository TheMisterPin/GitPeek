// import { useGitHub } from '../context/githubContext'

import { useGitHub } from '../hooks/githubContext'

function RepoList() {
  const { repositories } = useGitHub()

  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
          <p>{repo.description}</p>
          <p>{repo.language}</p>
          <img src={`https://skillicons.dev/icons?i=${repo.language.toLowerCase()}`} className="bg-black" alt={`Icon for ${repo.language}`} />
          <p>
            ⭐
            {repo.stargazers_count}
          </p>
        </li>
      ))}
    </ul>
  )
}
export default RepoList

// function RepoList() {
//   const { repositories } = useGitHub()

//   return (
//     <div>
//       {repositories.map((repo) => (
//         <div key={repo.id} style={{ marginBottom: '20px' }}>
//           <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//             <img
//               src={`https://github-readme-stats.vercel.app/api/pin/?username=${repo.owner.login}&repo=${repo.name}&theme=github_dark_dimmed`}
//               alt={`${repo.name} Project`}
//               style={{ maxWidth: '100%', height: 'auto' }}
//             />
//           </a>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default RepoList
