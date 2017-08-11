import types from './actionTypes'

export const setWeb3 = web3 => ({
  type: types.WEB3_INITIALIZED,
  payload: web3
})

export const setAccounts = accounts => ({
  type: types.SET_ACCOUNTS,
  payload: accounts
})

export const setContracts = contracts => ({
  type: types.SET_CONTRACTS,
  payload: contracts
})

export const resetForm = () => ({
  type: types.RESET_FORM
})

export const updateRecipient = e => ({
  type: types.UPDATE_RECIPIENT,
  payload: e.target.value
})

export const updateAmount = e => ({
  type: types.UPDATE_AMOUNT,
  payload: e.target.value
})

export const updateBalance = balance => ({
  type: types.UPDATE_BALANCE,
  payload: balance
})

export const pushTransaction = txReceipt => ({
  type: types.PUSH_TRANSACTION,
  payload: txReceipt
})
