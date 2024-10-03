# Tutorial_Three COMP726
### Samuel William 18034517

<h3 align="left">Languages and Tools:</h3>
<p align="left">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a>
  <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="vscode" width="40" height="40"/>
  </a>
</p>

### 1. What are some examples of fungible tokens compared to non-fungible tokens that you use that are not blockchain related?

**Fungible Tokens**
> Definition: Interchangeable and identical in value.

**Examples:**

1. Currency (e.g., cash)

2. Gift cards

3. Movie tickets (general admission)

4. Commodities (e.g., oil, wheat)

5. Loyalty points

**Non-Fungible Tokens**
> Definition: Unique and not interchangeable.

**Examples:**

1. Real estate (e.g., houses, land)

2. Collectibles (e.g., baseball cards)

3. Assigned seating tickets (e.g., concert tickets)

4. Passports

5. Diplomas

### 2. How much gas did you pay to deploy your contract? What are some implications of the gas auction fees model?

I successfully deployed my smart contract to the Sepolia testnet, and during the deployment, I paid 0.06837925 ETH in gas fees. The total amount of gas used for the transaction was **6,806,221 gas** units.

This cost reflects the network’s gas auction model, where the fees are determined by the amount of gas my transaction requires and the current gas price on the network. Deploying a contract typically uses more gas than other types of transactions due to the size and complexity of the operation, which is why the cost was relatively high.

### 3. Include a link to your contract deployment transaction on https://goerli.etherscan.io/ or similar testnet.

![17](https://github.com/user-attachments/assets/611b88d4-2396-470d-920b-d7ecf66a84cc)


I deployed my smart contract on the Sepolia testnet as Goerli is no longer recommended for use. Below is the link to my deployed contract:

https://sepolia.etherscan.io/address/0xaf75E28a6D84b59647c356a52483fa4a6Cf8b5d5

### Acquiring Sepolia ETH for Testnet Deployment:

To fund my Sepolia testnet wallet and deploy my smart contract, I used the following faucets to obtain Sepolia ETH for gas fees:

Chainlink Sepolia Faucet:  https://faucets.chain.link/sepolia

![14](https://github.com/user-attachments/assets/e70c7aee-edb5-4453-9769-1ecc122a0015)

Google Cloud Faucet for Sepolia: https://cloud.google.com/application/web3/faucet/ethereum/sepolia

![16](https://github.com/user-attachments/assets/cbed7f0f-0de0-4434-bbcb-a89b4248da41)


I transferred Sepolia ETH from these faucets to my MetaMask wallet, which allowed me to cover the transaction fees for deploying my contract to the Sepolia testnet. This process is essential for testing smart contracts on the Ethereum blockchain without spending real ETH.

#

### 1. Change the metadata and mint another NFT.


```

const metadata = {
    attributes: [
        { trait_type: "Course", value: "Blockchain Basics" },
        { trait_type: "Name", value: "Naruto" }
    ],
    description: "Course Credits Certificate in Blockchain Basics",
    image: "ipfs://QmVxFXNuVJdk5QFzvkpSSeXypdDsCf8LET1kDnkZQBFyvj",
    name: "Blockchain Basics Certificate"
};

https://gateway.pinata.cloud/ipfs/Qmc5FvC7B6B5XMMqXDhgADpqHM4mTDehiS52Fcswy32Wv1

// Call the mintNFT function with the new metadata
mintNFT(metadata);

```


### 2. Investiage how to actually view your NFT certificate that is stored on IPFS via Pinata.

Access Your Pinata Account:

1.Go to the Pinata website and log in to your account.
Navigate to the Pin Manager to see your pinned files.
Locate Your Metadata File:

2. In the Pin Manager, search for the metadata JSON file associated with your NFT. This file typically contains details about your NFT, including its name, description, image URL, attributes, and the IPFS link for the certificate.

 Copy the IPFS Link:

Click on the metadata file to view its details. You should see an IPFS gateway URL. It will look something like this:

My Example Link:
https://gateway.pinata.cloud/ipfs/Qmc5FvC7B6B5XMMqXDhgADpqHM4mTDehiS52Fcswy32Wv1

Access the Metadata JSON:

```
{
  "attributes": [
    {
      "trait_type": "Course",
      "value": "Blockchain Basics"
    },
    {
      "trait_type": "Name",
      "value": "Alice Doe"
    }
  ],
  "description": "Course Credits Certificate in Blockchain Basics",
  "image": "ipfs://QmVxFXNuVJdk5QFzvkpSSeXypdDsCf8LET1kDnkZQBFyvj",
  "name": "Blockchain Basics Certificate"
}
```


### 3. Write a script to generate a new random NFT every time mint is called.

```
function getRandomNFTMetadata() {
    const courses = ["Blockchain Basics", "Cryptocurrency", "Smart Contracts"];
    const names = ["Alice Doe", "Bob Smith", "Charlie Brown"];
    const randomCourse = courses[Math.floor(Math.random() * courses.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    
    return {
        attributes: [
            { trait_type: "Course", value: randomCourse },
            { trait_type: "Name", value: randomName }
        ],
        description: `Course Credits Certificate in ${randomCourse}`,
        image: "ipfs://QmVxFXNuVJdk5QFzvkpSSeXypdDsCf8LET1kDnkZQBFyvj", // Adjust this for random images if needed
        name: `${randomCourse} Certificate`
    };
}

// Call the mintNFT function with random metadata
const randomMetadata = getRandomNFTMetadata();
mintNFT(randomMetadata);

```




