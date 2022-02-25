import axios from "axios"
import { ACTION_COMMENTS_FETCH, ACTION_COMMENT_SAVE, ACTION_LOGIN, ACTION_LOGOUT } from "./types"

export const SOURCE_URL = 'https://jsonplaceholder.typicode.com/comments'

export const saveComment = (comment) => {
  return {
    type: ACTION_COMMENT_SAVE,
    payload: comment
  }
}

export const fetchComments = async () => {
  const response = await axios.get(SOURCE_URL)

  return {
    type: ACTION_COMMENTS_FETCH,
    payload: response
  }
}

export const login = () => {
  return { type: ACTION_LOGIN }
}

export const logout = () => {
  return { type: ACTION_LOGOUT }
}