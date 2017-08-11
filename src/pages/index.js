import React, { Component } from 'react'
import { compose } from 'redux'

/* Styles
** ****************** */
import '../styles/index.css'

/* Components
** ****************** */
import CoinbaseLabel from '../components/CoinbaseLabel'
import MetaCoinBalance from '../components/MetaCoinBalance'
import MetaCoinForm from '../components/MetaCoinForm'
import TransactionsList from '../components/TransactionsList'

/* Providers
** ****************** */
import withWeb3 from '../components/providers/withWeb3'
import withAccounts from '../components/providers/withAccounts'
import withContracts from '../components/providers/withContracts'

const Index = () => (
  <main>
    <h2>Transfer MetaCoins</h2>
    <hr />
    <CoinbaseLabel />
    <MetaCoinBalance />
    <MetaCoinForm />
    <TransactionsList />
  </main>
)

export default compose(
  withWeb3,
  withAccounts,
  withContracts
)(Index)
