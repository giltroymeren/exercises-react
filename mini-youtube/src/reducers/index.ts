import { combineReducers } from "redux";
import videoListReducer from './videoListReducer'

export const rootReducer = combineReducers({
  videos: videoListReducer,
})
