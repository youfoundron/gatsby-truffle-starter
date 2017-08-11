import { meta as defaultState } from '../store/initialState'
import types from '../constants/actionTypes'

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_BALANCE:
      return { ...state, balance: action.payload }
    case types.PUSH_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.concat(action.payload)
      }
    default:
      return state
  }
}
