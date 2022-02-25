import React from "react"
import { Link } from "react-router-dom"

const NavBar = (props) => {
  return (
    <div className="navbar bg-primary">
      <Link to='/'>
        <h1>
          <i className="fab fa-github" /> Github Finder
        </h1>
      </Link>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  )
}

export default NavBar