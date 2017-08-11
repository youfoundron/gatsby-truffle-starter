import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { delay } from 'bluebird'

import AmountInput from './AmountInput'
import RecipientInput from './RecipientInput'

import { getCoinbase } from '../state/constants/selectors'
import { resetForm, updateBalance, pushTransaction } from '../state/constants/actionCreators'

class MetaCoinForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    const {
      web3,
      coinbase: from,
      resetForm,
      updateBalance,
      pushTransaction,
      contracts: { MetaCoin },
      formData: { recipient, amount }
    } = this.props
    e.preventDefault()

    MetaCoin.sendCoin.sendTransaction(recipient, amount, {from})
      .then(txHash => {
        const getReceipt = () => web3.eth.getTransactionReceiptAsync(txHash)
          .then(receipt => receipt !== null
            ? receipt
            : delay(500).then(getReceipt))
        return getReceipt()
      })
      .then(receipt => MetaCoin.Transfer().formatter(receipt.logs[0]).args)
      .then(pushTransaction)
      .then(() => MetaCoin.getBalance.call(from))
      .then(balance => balance.toString(10))
      .then(updateBalance)
      .then(resetForm)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <AmountInput />
        <RecipientInput />
        <input type='submit' value='Now!' />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  web3: state.web3,
  coinbase: getCoinbase(state),
  formData: state.formData,
  contracts: state.contracts
})

const mapDispatchToProps = dispatch => ({
  resetForm: bindActionCreators(resetForm, dispatch),
  updateBalance: bindActionCreators(updateBalance, dispatch),
  pushTransaction: bindActionCreators(pushTransaction, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MetaCoinForm)
