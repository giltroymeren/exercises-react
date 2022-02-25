import { ACTION_COMMENTS_FETCH, ACTION_COMMENT_SAVE } from "../actions/types";

export default function (state = '', action) {
  switch (action.type) {
    case ACTION_COMMENT_SAVE:
      return [...state, action.payload]

    case ACTION_COMMENTS_FETCH:
      const comments = action.payload.data.map(comment => comment.name)
      return [...state, ...comments]

    default:
      return state
  }
}