const { ethers } = require("hardhat");

async function main() {
    // Set the initial message to be passed to the constructor
    const initMessage = "Hello, World!"; // You can customize this message

    // Get the contract factory for HelloWorld
    const ContractFactory = await ethers.getContractFactory("HelloWorld");
    
    // Deploy the contract with the initial message
    const contract = await ContractFactory.deploy(initMessage);
    
    // Wait for the contract to be deployed
    await contract.deployed();

    // Log the address of the deployed contract
    console.log("Contract deployed to:", contract.address);
}

// Run the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
