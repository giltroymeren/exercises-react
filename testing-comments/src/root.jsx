import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise'

import rootReducer from './reducers'
import async from './middlewares/async'
import stateValidator from './middlewares/stateValidatorSchema'

const RootProvider = ({ children, initialState = {} }) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxPromise)
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default RootProvider
