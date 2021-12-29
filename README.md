# Milkomeda Crowdfunding

![demo](https://user-images.githubusercontent.com/35738310/64013051-47c49100-cb1f-11e9-8877-c09a944261b5.PNG)

<h3><a href="https://alessandrokonrad.github.io/ethereum-funding/">Demo</a></h3>
<p>(make sure Metamask is installed, otherwise you can't interact with the dapp)</p>
Check smart contract for this example:
http://use-util.cloud.milkomeda.com:4000/address/0x7ae28c580DccA503c7412CE94e844db6f75BE585/transactions

## Getting started

1. clone the repository
2. run npm install
3. install Metamask as Chrome extension
4. create a wallet in Metamask

### Create smart contract

under src/contract/ you can find the contract.sol file. This is the contract I use for this example.
To use your own contract follow these steps:

1. go to the <a href="https://remix.ethereum.org/">Remix IDE</a>
2. paste in the contract.sol file
3. deploy the contract on the network you want (e.g. mainnet or ropsten or Milkomeda)
4. copy the abi and the contract address
5. go to src/contract/abi.js and replace the abi with yours
6. go to src/contract/contract.js and replace the contract address with yours

## Project setup

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
