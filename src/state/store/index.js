import { compose, createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import initialState from './initialState'
import * as actionCreators from '../constants/actionCreators'

// support redux devtools extension
const useReduxDevtools =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// middleware helpers
const typeRegEx = /Symbol\((.*?)\)/
const actionSanitizer = action => ({
  ...action,
  type: typeof action.type === 'symbol'
    ? String(action.type).match(typeRegEx)[1]
    : action.type
})

const composeEnhancers = useReduxDevtools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionCreators,
    actionSanitizer
  })
  : compose

const middlewares = []
const middleware = composeEnhancers(
  applyMiddleware(...middlewares)
  // additional enhancers...
)

// create the store
const store = createStore(rootReducer, initialState, middleware)

export default store
