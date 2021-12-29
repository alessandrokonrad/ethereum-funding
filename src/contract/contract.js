import { abi } from "./abi";
import Web3 from "web3";

var web3;
var contract;
const contractAddress = "0x7ae28c580DccA503c7412CE94e844db6f75BE585";

const checkCompatible = async () => {
  // Modern dapp browsers...
  if (window.ethereum || window.web3) {
    web3 = new Web3(window.web3.currentProvider);
    contract = new web3.eth.Contract(abi, contractAddress);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts now exposed
    } catch (error) {
      // User denied account access...
    }
  }
  // Non-dapp browsers...
  else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
    return false;
  }
  return true;
};

const total = async () => {
  let result = await contract.methods
    .totalAmount()
    .call((error, result) => result);
  return web3.utils.fromWei(result, "ether");
};

const current = async () => {
  let result = await contract.methods
    .currentAmount()
    .call((error, result) => result);
  return web3.utils.fromWei(result, "ether");
};

const fund = (amount) => {
  let amountWei = web3.utils.toWei(amount.toString(), "ether");
  contract.methods
    .fund()
    .send({
      from: window.ethereum.selectedAddress,
      value: amountWei,
      gas: 3000000,
    })
    .then(() => console.log("Successfully funded!"));
};

const changeTotal = (amount) => {
  let amountWei = web3.utils.toWei(amount.toString(), "ether");
  contract.methods
    .changeTotalAmount(amountWei)
    .send({
      from: window.ethereum.selectedAddress,
      gas: 3000000,
    })
    .then(() => console.log("Successfully changed total amount!"));
};

const widthdrawFunds = () => {
  contract.methods
    .withdrawFunds()
    .send({
      from: window.ethereum.selectedAddress,
      gas: 3000000,
    })
    .then(() => console.log("Successfull widthdrawal!"));
};

const fundContract = {
  total,
  fund,
  current,
  changeTotal,
  widthdrawFunds,
  checkCompatible,
};

export default fundContract;
