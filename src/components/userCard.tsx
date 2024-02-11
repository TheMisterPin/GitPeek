import { useGitHub } from '../hooks/githubContext'

function UserCard() {
  const { userDetails } = useGitHub()

  return (
    (
      userDetails
        ? (
          <div className="w-3/12 flex flex-col bg-card-grey">
            <img className="w-3/4 rounded-full " src={userDetails.avatar_url} alt={`${userDetails.name}'s avatar`} />
            <h2 className="font-sans text-blue-letter font-semibold">{userDetails.login}</h2>
            <h2 className="font-sans text-blue-letter font-semibold">
              Location
              {userDetails.location}
            </h2>
            <h2 className="font-sans text-blue-letter font-semibold">
              Repositories
              {userDetails.public_repos}
            </h2>
            <h2 className="font-sans text-blue-letter font-semibold">
              {' '}
              Starred
              {userDetails.starredRepositories}
            </h2>
            <h2 className="font-sans text-blue-letter font-semibold">
              Repositories
              {userDetails.public_repos}
            </h2>
            <h2 className="font-sans text-blue-letter font-semibold">
              {' '}
              BIO
              {userDetails.bio}
            </h2>

            <p>
              Followers:
              {userDetails.followers}
              {' '}
              | Following:
              {userDetails.following}
            </p>
            <a href="https://github.com/anuraghazra/convoychat">
              <img src={`https://github-readme-stats.vercel.app/api/top-langs?username=${userDetails.login}&theme=github_dark_dimmed&layout=compact&langs_count=8&card_width=320"`} alt="user languages" />
            </a>

          </div>
        )
        : null
    )
  )
}

export default UserCard
