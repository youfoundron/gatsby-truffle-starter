import Promise, { reduce } from 'bluebird'
import contract from 'truffle-contract'

export default (contractPairs, web3) => (
  reduce(contractPairs, (deployedContracts, [name, json]) => (
    new Promise(resolve => {
      const wrappedContract = contract(json)
      wrappedContract.setProvider(web3.currentProvider)
      wrappedContract.deployed().then(deployedContract => {
        deployedContracts[name] = deployedContract
        return resolve(deployedContracts)
      })
    })
  ), {})
)
