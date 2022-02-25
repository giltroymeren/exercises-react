import { combineReducers } from "redux"
import { DEFAULT_DATA } from "../common/posts"
import { ACTION_ADD_COMMENT, ACTION_ADD_PHOTO, ACTION_REMOVE_PHOTO } from "./actions"

const photosReducer = (state=DEFAULT_DATA, action) => {
  switch(action.type) {
    case ACTION_ADD_PHOTO:
      return state.concat(action.payload)
    case ACTION_REMOVE_PHOTO:
      return state.filter(photo => photo.id !== action.payload)
    default: return state
  }
}

const commentsReducer = (state=[], action) => {
  switch(action.type) {
    case ACTION_ADD_COMMENT:
      return state.concat(action.payload)
    default: return state
  }
}

const rootReducer = combineReducers({
  photosReducer,
  commentsReducer
})

export default rootReducer