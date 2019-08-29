pragma solidity ^0.5.1;


contract Funding {

    uint public totalAmount;
    uint public currentAmount;
    address owner;

    constructor() public {
        totalAmount = 15 ether;
        currentAmount = 0 ether;
        owner = 0xeC8E34F1e3839312567Ed9a0B3528424F1d0824F;
    }

    function fund(uint amount) public payable {
        require(
            amount == msg.value,
            "expected amount doesn't equal transacted amount!"
            );
        currentAmount += amount;
    }

    function changeTotalAmount(uint amount) public {
        require(
            msg.sender == owner,
            "you are not an owner!"
            );
        totalAmount = amount;
    }


    function widthdrawFunds() public {
        require(
            msg.sender == owner,
            "your are not an owner!"
            );
        owner.transfer(address(this).balance);
  }
    }

}