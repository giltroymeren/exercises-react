import { ACTION_CLEAR_USERS, ACTION_GET_REPOS, ACTION_GET_USER, ACTION_SEARCH_USERS, ACTION_SET_LOADING } from "../types"

export const GithubReducer = (state, action) => {
  switch (action.type) {
    case ACTION_CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }

    case ACTION_GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }

    case ACTION_SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case ACTION_SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case ACTION_GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }

    default: return state
  }
}