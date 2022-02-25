import React from 'react'
import { Link } from 'react-router-dom'

const Title = (props) => {
  return (
    <Link to={`/`}>
      <h1>photowall</h1>
    </Link>
  )
}

export default Title