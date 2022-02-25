import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p className='lead'>
        The page you are looking does not exist. Go back to <Link to='/'>home page</Link>.
      </p>
    </div>
  )
}

export default NotFound