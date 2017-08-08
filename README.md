# Gatsby Truffle Starter
A Gatsby starter with the Truffle Ethereum development framework in place.

## Installation

1. Install truffle and an Ethereum client. For local development, try EthereumJS TestRPC.
    ```
    $ npm install -g truffle // Version 3.0.5+ required.
    $ npm install -g ethereumjs-testrpc
    ```

2. Clone this repo and cd into directory.
    ```
    $ git clone git@github.com:rongierlach/gatsby-truffle-starter.git
    $ cd gatsby-truffle-starter
    ```

3. Install dependencies with npm.
    ```
    $ npm install
    ```

4. Use truffle to compile and migrate the contracts.
    ```
    $ truffle compile
    $ truffle migrate
    ```

5. Start the dev environment.
    ```
    $ npm run dev
    ```

6. Building for production.
    ```
    $ npm run build
    ```
