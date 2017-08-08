import { web3 as defaultState } from '../store/initialState'
import types from '../constants/actionTypes'

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.WEB3_INITIALIZED:
      return action.payload
    default:
      return state
  }
}
