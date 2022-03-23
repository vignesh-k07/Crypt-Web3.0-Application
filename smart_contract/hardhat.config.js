

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/BhzLWgbjgGz3pvSNFXwkL53kKpanNtcP',
      accounts: [ 'c23da28ffbd6b6d2725ea86afeb7d0dd3b4d514849d47748334e155147041718' ]
    }
  }
}