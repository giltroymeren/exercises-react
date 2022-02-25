import React, { useContext, useEffect } from 'react'
import { Spinner } from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'

const User = ({
  match
}) => {
  const githubContext = useContext(GithubContext)

  useEffect(() => {
    githubContext.getUser(match.params.login)
    githubContext.getUserRepos(match.params.login)
    // eslint-disable-next-line
  }, [])

  const {
    avatar_url,
    bio,
    blog,
    company,
    followers,
    following,
    hireable,
    html_url,
    location,
    login,
    name,
    public_gists,
    public_repos,
  } = githubContext.user

  if (githubContext.loading) return <Spinner />

  return (
    <React.Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>

      Site Admin: {' '}
      <i className={`fa ${hireable ? 'fa-check text-success' : 'fa-times-circle text-danger'}`} />

      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: '150px' }} />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>

        <div>
          {bio &&
            <div>
              <h3>Bio</h3>
              <p>{bio}</p>
            </div>}

          <a
            href={html_url}
            className='btn btn-dark my-1'>
            Visit Github Profile
          </a>

          <ul>
            {login &&
              <li>
                <strong>Username: {login}</strong>
              </li>}

            {company &&
              <li>
                <strong>Company: {company}</strong>
              </li>}

            {blog &&
              <li>
                <strong>Website: <a href={blog}>{blog}</a></strong>
              </li>}
          </ul>
        </div>
      </div>

      <div className='card text-center'>
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>

      {githubContext.repos.length > 0 && (
        <Repos repos={githubContext.repos} />
      )}
    </React.Fragment>
  )

}

export default User
