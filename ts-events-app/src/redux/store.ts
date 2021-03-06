import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import recorderReducer from "./recorder";
import userEventsReducer from "./userEvents";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer
});

export type TRootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store