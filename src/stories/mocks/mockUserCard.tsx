interface MockUserCardProps {
  user: UserGH
}

function MockUserCard({ user }: MockUserCardProps) {
  return (
    <div className="w-3/12 flex flex-col bg-card-grey p-4">
      <img className="w-3/4 mx-auto rounded-full" src={user.avatarUrl} alt={`${user.name}'s avatar`} />
      <div className="text-center mt-4">
        <h2 className="font-sans text-blue-letter font-semibold">{user.login}</h2>
        <p className="text-sm">{user.bio}</p>
        <p className="text-sm">
          Location:
          {user.location}
        </p>
        <p className="text-sm">
          Repositories:
          {user.public_repos}
        </p>
        <p className="text-sm">
          Starred:
          {user.starredRepositories}
        </p>
        <p className="text-sm">
          Followers:
          {user.followers}
          {' '}
          | Following:
          {user.following}
        </p>
      </div>
    </div>
  )
}
export default MockUserCard
