import { combineReducers } from 'redux'
import web3 from './web3'
import accounts from './accounts'
import contracts from './contracts'

export default combineReducers({
  web3,
  accounts,
  contracts
})
