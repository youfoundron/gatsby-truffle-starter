import { combineReducers } from 'redux'
import web3 from './web3'
import meta from './meta'
import formData from './formData'
import accounts from './accounts'
import contracts from './contracts'

export default combineReducers({
  web3,
  meta,
  formData,
  accounts,
  contracts
})
