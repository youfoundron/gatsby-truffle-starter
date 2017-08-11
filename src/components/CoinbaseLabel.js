import React from 'react'
import { connect } from 'react-redux'

import { getCoinbase } from '../state/constants/selectors'

const CoinbaseLabel = ({ coinbase }) => (
  <p><label>Coinbase: </label>{coinbase}</p>
)

const mapStateToProps = state => ({
  coinbase: getCoinbase(state)
})

export default connect(
  mapStateToProps
)(CoinbaseLabel)
