import React from 'react'
import { connect } from 'react-redux'

const TransactionsList = ({ transactions }) => (
  <ol>
    {transactions.map(({ _to, _from, _value }, i) => (
      <li key={i}>
        <ul>
          <li><label>To: </label>{_to}</li>
          <li><label>From: </label>{_from}</li>
          <li><label>Value: </label>{_value.toString(10)}</li>
        </ul>
      </li>
    ))}
  </ol>
)

const mapStateToProps = state => ({
  transactions: state.meta.transactions
})

export default connect(
  mapStateToProps
)(TransactionsList)
