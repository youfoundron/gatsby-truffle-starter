import { compose, createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

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

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger({
    diff: true,
    collapsed: true,
    actionTransformer: actionSanitizer
  }))
}

const middleware = applyMiddleware(...middlewares)

// create the store
const store = createStore(rootReducer, initialState, middleware)

export default store
