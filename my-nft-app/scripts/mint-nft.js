require("dotenv").config(); // Load environment variables from .env file
const API_URL = process.env.API_URL; // Get API URL from environment variables
const PUBLIC_KEY = process.env.PUBLIC_KEY; // Get public key from environment variables
const PRIVATE_KEY = process.env.PRIVATE_KEY; // Get private key from environment variables

const axios = require('axios'); // Import axios
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL); // Initialize Alchemy Web3
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json"); // Import contract ABI
const contractAddress = "NEW_CONTRACT_ADDRESS_HERE"; // Your contract address
const nftContract = new web3.eth.Contract(contract.abi, contractAddress); // Create contract instance

async function uploadMetadataToIPFS(metadata) {
    try {
        const response = await axios.post(`https://api.pinata.cloud/pinning/pinJSONToIPFS`, metadata, {
            headers: {
                pinata_api_key: process.env.PINATA_API_KEY, // Your Pinata API key
                pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY, // Your Pinata secret API key
                'Content-Type': 'application/json'
            }
        });

        return `ipfs://${response.data.IpfsHash}`; // Return the IPFS URI
    } catch (error) {
        console.error("Error uploading metadata to IPFS:", error);
        throw error; // Propagate the error to be handled in mintNFT
    }
}

async function mintNFT(tokenURI) {
    try {
        const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');

        const tx = {
            from: PUBLIC_KEY,
            to: contractAddress,
            nonce: nonce,
            gas: 22600,
            data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        console.log("Transaction hash:", receipt.transactionHash);
        console.log("Transaction receipt:", receipt);

        // If the function returns the new token ID, you can get it here
        const tokenId = await nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).call();
        console.log("Token ID:", tokenId);
    } catch (err) {
        console.error("Error minting NFT:", err);
    }
}



const metadata = {
    attributes: [
        { trait_type: "Course", value: "Blockchain Basics" },
        { trait_type: "Name", value: "Naruto" }
    ],
    description: "Course Credits Certificate in Blockchain Basics",
    image: "ipfs://QmVxFXNuVJdk5QFzvkpSSeXypdDsCf8LET1kDnkZQBFyvj",
    name: "Blockchain Basics Certificate"
};

// Call the mintNFT function with the new metadata
mintNFT(metadata);
