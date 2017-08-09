const scopeTypes = (types = [], scope = 'App') => (
  types.reduce(
    (scopedTypes, type) => {
      scopedTypes[type] = Symbol(`${scope}/${type}`)
      return scopedTypes
    }, {}
  )
)

const appTypes = [
  'WEB3_INITIALIZED',
  'SET_ACCOUNTS',
  'SET_CONTRACTS'
]

export default {
  ...scopeTypes(appTypes)
}
