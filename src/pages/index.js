import React from 'react'
import { compose } from 'redux'

import withWeb3 from '../components/providers/withWeb3'
import withAccounts from '../components/providers/withAccounts'
// import withContracts from '../components/providers/withContracts'

const Index = ({ accounts, contracts }) => {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  )
}

export default compose(
  withWeb3,
  withAccounts,
  // withContracts
)(Index)
