import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'

import MetaCoinJSON from '../../../build/contracts/MetaCoin.json'
import getDeployedContracts from '../../util/getDeployedContracts'
import { setContracts } from '../../state/constants/actionCreators'
import { contractsAreDeployed } from '../../state/constants/selectors'

// contract name & JSON
const contractPairs = [
  ['MetaCoin', MetaCoinJSON]
]

const withContracts = Cmp => class extends Component {
  componentWillMount () {
    const { web3, contractsDeployed, setContracts } = this.props
    if (!contractsDeployed)
      getDeployedContracts(contractPairs, web3).then(setContracts)
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
  contracts: state.contracts,
  contractsDeployed: contractsAreDeployed(state, contractPairs)
})

const mapDispatchToProps = dispatch => ({
  setContracts: bindActionCreators(setContracts, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withContracts
)
