import { combineReducers } from "redux";
import repoReducer from "./repoReducer";

const reducers = combineReducers({
  repositories: repoReducer
})

export default reducers

export type TRootState = ReturnType<typeof reducers>