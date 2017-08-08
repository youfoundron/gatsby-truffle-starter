export const hasAccounts = ({ accounts }) => !!(
  Array.isArray(accounts) && accounts.length
)

export const getCoinbase = ({ accounts: [coinbase] }) => (
  coinbase
)
