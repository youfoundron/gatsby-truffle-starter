import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateRecipient } from '../state/constants/actionCreators'

const RecipientInput = ({ recipient, recipientAccounts, updateRecipient }) => (
  <div>
    <label>
      to account at address&nbsp;
      <input
        type='text'
        name='recipient'
        list='recipients'
        value={recipient}
        onChange={updateRecipient}
        style={{width: 300}}
        placeholder='0x0011223344556677889900112233445566778899'
        required
      />
    </label>
    <datalist id='recipients'>{
      recipientAccounts.map(account => (
        <option key={account} value={account} />
      ))
    }</datalist>
  </div>
)

const mapStateToProps = state => ({
  recipient: state.formData.recipient,
  recipientAccounts: state.accounts.slice(1)
})

const mapDispatchToProps = dispatch => ({
  updateRecipient: bindActionCreators(updateRecipient, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipientInput)
