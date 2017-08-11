import React from 'react'
import { connect } from 'react-redux'

const MetaCoinBalance = ({ balance }) => (
  <p>You have {balance} MetaCoins</p>
)

const mapStateToProps = state => ({
  balance: state.meta.balance
})

export default connect(
  mapStateToProps
)(MetaCoinBalance)
