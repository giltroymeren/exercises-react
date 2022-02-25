import React, { useContext } from "react"
import { Spinner } from "../layout/Spinner"
import UserItem from "./UserItem"
import PropTypes from 'prop-types'
import GithubContext from "../../context/github/githubContext"

const Users = () => {
  const githubContext = useContext(GithubContext)
  
  if (githubContext.loading) {
    return <Spinner />
  } else {
    return (
      <div className="users">
        {githubContext.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users