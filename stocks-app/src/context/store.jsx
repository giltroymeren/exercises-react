import { createStore } from 'redux'
import stockReducer from './reducers'

const store = createStore(
  stockReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store