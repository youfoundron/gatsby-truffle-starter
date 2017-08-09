import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'

import getWeb3 from '../../util/getWeb3'
import { setWeb3 } from '../../state/constants/actionCreators'

const withWeb3 = Cmp => class extends Component {
  componentWillMount () {
    const { web3, setWeb3 } = this.props
    if (!web3) getWeb3.then(setWeb3)
  }

  render () {
    const { web3, setWeb3, ...props } = this.props
    return web3
      ? <Cmp web3={web3} {...props} />
      : <p>Looking for web3 provider...</p>
  }
}

const mapStateToProps = state => ({
  web3: state.web3
})

const mapDispatchToProps = dispatch => ({
  setWeb3: bindActionCreators(setWeb3, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withWeb3
)
