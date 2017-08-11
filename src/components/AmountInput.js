import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAmount } from '../state/constants/actionCreators'

const AmountInput = ({ amount, updateAmount }) => (
  <div>
    <label>
      Send&nbsp;
      <input
        type='number'
        name='amount'
        value={amount}
        onChange={updateAmount}
      />
      &nbsp;MetaCoins
    </label>
  </div>
)

const mapStateToProps = state => ({
  amount: state.formData.amount
})

const mapDispatchToProps = dispatch => ({
  updateAmount: bindActionCreators(updateAmount, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AmountInput)
