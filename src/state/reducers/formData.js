import { formData as defaultState } from '../store/initialState'
import types from '../constants/actionTypes'

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.RESET_FORM:
      return defaultState
    case types.UPDATE_AMOUNT:
      return { ...state, amount: action.payload }
    case types.UPDATE_RECIPIENT:
      return { ...state, recipient: action.payload }
    default:
      return state
  }
}
