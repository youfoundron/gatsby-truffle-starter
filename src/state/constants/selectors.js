export const hasAccounts = ({ accounts }) => !!(
  Array.isArray(accounts) && accounts.length
)

export const getCoinbase = ({ accounts: [coinbase] }) => (
  coinbase
)

export const contractsAreDeployed = ({ contracts }, contractPairs) => {
  for (let [name] of contractPairs)
    if (typeof contracts[name] !== 'object') return false
  return true
}
