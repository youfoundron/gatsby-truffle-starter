import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'

import MetaCoinJSON from '../../../build/contracts/MetaCoin.json'
import getDeployedContracts from '../../util/getDeployedContracts'
import { setContracts, updateBalance } from '../../state/constants/actionCreators'
import { contractsAreDeployed, getCoinbase } from '../../state/constants/selectors'

// contract name & JSON
const contractPairs = [
  ['MetaCoin', MetaCoinJSON]
]

const withContracts = Cmp => class extends Component {
  componentWillMount () {
    const { web3, coinbase, contractsDeployed, setContracts, updateBalance } = this.props
    if (!contractsDeployed)
      getDeployedContracts(contractPairs, web3)
        .then(setContracts)
        .then(({payload}) => payload.MetaCoin.getBalance.call(coinbase))
        .then(balance => balance.toString(10))
        .then(updateBalance)
  }

  render () {
    const { contractsDeployed, contracts, setContracts, ...props } = this.props
    return contractsDeployed
      ? <Cmp contracts={contracts} {...props} />
      : <p>Deploying contracts...</p>
  }
}

const mapStateToProps = state => ({
  web3: state.web3,
  coinbase: getCoinbase(state),
  contracts: state.contracts,
  contractsDeployed: contractsAreDeployed(state, contractPairs)
})

const mapDispatchToProps = dispatch => ({
  setContracts: bindActionCreators(setContracts, dispatch),
  updateBalance: bindActionCreators(updateBalance, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withContracts
)
