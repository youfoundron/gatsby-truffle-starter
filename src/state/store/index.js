import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from '../reducers'
import initialState from './initialState'
import * as actionCreators from '../constants/actionCreators'

// middleware helpers
const typeRegEx = /Symbol\((.*?)\)/
const actionSanitizer = action => ({
  ...action,
  type: typeof action.type === 'symbol'
    ? String(action.type).match(typeRegEx)[1]
    : action.type
})

// use redux devtools enhancer
const composeEnhancers = composeWithDevTools({
  actionCreators,
  actionSanitizer
})

const middlewares = []
const middleware = composeEnhancers(
  applyMiddleware(...middlewares)
  // additional enhancers...
)

// create the store
const store = createStore(rootReducer, initialState, middleware)

export default store
