import { createStore } from 'redux'
import { rootReducer } from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  rootReducer,
  composeWithDevTools()
)

export type IRootState = ReturnType<typeof store.getState>