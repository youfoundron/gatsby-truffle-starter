import React from 'react'
import { compose } from 'redux'

import '../styles/index.css'
import withWeb3 from '../components/providers/withWeb3'
import withAccounts from '../components/providers/withAccounts'
import withContracts from '../components/providers/withContracts'

const Index = ({ accounts, contracts }) => {
  return (
    <main>
      <h2>MetaCoin</h2>
      <hr />
      <p><label>Coinbase: </label>{accounts[0]}</p>

    </main>
  )
}

export default compose(
  withWeb3,
  withAccounts,
  withContracts
)(Index)
