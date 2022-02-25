import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({ repos }) => {
  return (
    repos.map(repo => (
      <div key={repo.id} className='card'>
        <h3>
          <a href={repo.html_url}>
            {repo.name}
          </a>
        </h3>
      </div>
    ))
  )
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default Repos

