import types from './actionTypes'

export const setWeb3 = web3 => ({
  type: types.WEB3_INITIALIZED,
  payload: web3
})

export const setAccounts = accounts => ({
  type: types.SET_ACCOUNTS,
  payload: accounts
})
