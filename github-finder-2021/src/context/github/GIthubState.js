import React, { useReducer } from "react"
import GithubContext from "./githubContext"
import {
  ACTION_CLEAR_USERS,
  ACTION_GET_REPOS,
  ACTION_GET_USER,
  ACTION_SEARCH_USERS,
  ACTION_SET_LOADING,
} from '../types'
import axios from "axios"
import { GithubReducer } from "./githubReducer"

const GithubState = (props) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const setLoading = () => dispatch({
    type: ACTION_SET_LOADING
  })

  const clearUsers = () => dispatch({
    type: ACTION_CLEAR_USERS
  })

  const getUser = async (username) => {
    setLoading(true)
    const response =
      await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    dispatch({
      type: ACTION_GET_USER,
      payload: response.data
    })
  }

  const searchUsers = async (text) => {
    setLoading()
    const response =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    dispatch({
      type: ACTION_SEARCH_USERS,
      payload: response.data.items
    })
  }

  const getUserRepos = async (username) => {
    setLoading(true)
    const response =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    dispatch({
      type: ACTION_GET_REPOS,
      payload: response.data
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,

        getUser,
        clearUsers,
        searchUsers,
        getUserRepos,
      }}>
      {props.children}ƒ
    </GithubContext.Provider>
  )
}

export default GithubState