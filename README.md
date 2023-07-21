## BeatSpire - Experience Music And NFTs like Never before
<h2>Step into the world of music NFTs
And immerse yourself in a
Revolutionary new way to experience
And collect music.</h2>

<h2>Contract Details</h2>

- Contract written in solidity and deployed in Polygon Mumbai net
- Uses the protocol of ERC 721 to mint token URI of music art uploaded to IPFS
- Utilized Hardhat for deployement and testing

To deploy your own contract :-
1) Add Polygon mumbai to your wallet
2) Get yourself  a polygonscan API
3) Navigate to
   ``` /src/Contracts ```
4) Refer to env_sample file and create your env with required fields mentioned.
   ```bash
   PRIVATE_KEY = "" 
   POLYGONSCAN_API_KEY=""
  
5) Go to terminal and run ```npm install``` or ```yarn install``` to install dependecies.
6) And in hardhat perform :-
   To compile:-
   ```bash
   npx hardhat compile
   ```
   To deploy (You may modify the hardhat config according to network of your choice):-
   ```bash
   npx hardhat run scripts/deploy.js --network polygon_mumbai
   ```
   And save the contract address for frontend fetch use

<h2> ⚠️⚠️Drive Link for public folder with media assets </h2>
[https://drive.google.com/drive/folders/1wFZoHpPz9pUIDnYFwVry-TbJQmA8foMv](url)

<h2>Integration Details</h2>
1) Frontend UI uses ReactJUS styled using tailwindCSS , MUI and styled components modules
2) Uploading media to IPFS and getting CID is made possible by API by [NFT.STORAGE](https://nft.storage)
3) Using Alchemy endpoint RPC to connect app to deployed smart contract.
4) Also uses the power for Google Firebase Firestore for a smooth offchain storage of user/NFT data .

To integrate firebase backend :-
1) Start a new firebase server at your console.
2) Create a new web app in firebase server and copy paste the config the config accordingly at ```FirebaseConfig.js``` located in ```src/BackendConfig``` folder.
3) Add collections users,artists,happy,sad,angry.
4) You can expand collections based on moods to be added.

To integrate blockchain :-
1) Get a API key from NFT STORAGE to enable your own uploading feature
2) Go to Alchemy and get a API key with polygon network RPC. (or network of your choice where you have deployed your contract)
3) Get all API keys and contract address ,finally add it in env file inside root folder. Checkout env_sample file for model env.
   
 ```bash
REACT_APP_APIKEY = ""
REACT_APP_PUBLIC_NFT_STORAGE_TOKEN=""
REACT_APP_PUBLIC_ALCHEMY_KEY=""
REACT_APP_NFTMARKETPLACE_CONTRACT = ""
```

To run the application:-

Navigate to root folder in termianl
And run the following commands to install dependencies and run app

```bash
npm install
npm run start
```
![image](https://github.com/SabariGanesh-K/beatspire/assets/64348740/6a5eba49-d6a1-44bb-aca0-a58ffdc20f43)

![image](https://github.com/SabariGanesh-K/beatspire/assets/64348740/4e549692-af80-4eae-ba87-77e85fe10662)

![image](https://github.com/SabariGanesh-K/beatspire/assets/64348740/40f8e877-2ceb-427f-8f65-1ba0dda3a6e4)





  



