// SPDX-License-Identifier: UNLICENSED
// Specifies the version of Solidity, using semantic versioning.
pragma solidity >=0.7.3;

// Defines a contract named `HelloWorld`.
contract HelloWorld {

   // Emitted when update function is called
   event UpdatedMessages(string oldStr, string newStr);
   
   // Emitted when tokens are minted
   event Minted(address indexed to, uint256 amount);

   // Declares a state variable `message` of type `string`.
   string public message;

   // Declares a mapping to hold the balances of minted tokens for each address.
   mapping(address => uint256) public balances;

   // Declares a variable to track the total supply of minted tokens.
   uint256 public totalSupply;

   // Constructor to initialize the contract's `message` state variable.
   constructor(string memory initMessage) {
      message = initMessage;
   }

   // A public function that accepts a string argument and updates the `message` storage variable.
   function update(string memory newMessage) public {
      string memory oldMsg = message;
      message = newMessage;
      emit UpdatedMessages(oldMsg, newMessage);
   }

   // A public function to mint new tokens.
   function mint(uint256 amount) public {
      require(amount > 0, "Amount must be greater than 0");

      // Update the total supply and the sender's balance
      totalSupply += amount;
      balances[msg.sender] += amount;

      // Emit a Minted event
      emit Minted(msg.sender, amount);
   }

   // A function to check the balance of tokens for a specific address.
   function balanceOf(address owner) public view returns (uint256) {
      return balances[owner];
   }
}
