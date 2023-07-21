import React, { useState, useEffect, useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import { BlockchainConfig } from "../../BackendConfig/BlockchainConfig";
import { FirebaseConfig } from "../../BackendConfig/FirebaseConfig";
import Navbar from "../Landing/components/Navbar";
import MainLayout from "../MainLayout";
import styled, { keyframes } from 'styled-components'
import TopNft from './components/TopNft'
import Hottest from './components/Hottest'
import Newest from './components/Newest'
import SiteBoard from './components/SiteBoard'
import {Link} from 'react-router-dom'
import { Loader } from "./components/Loader";
import NFTCard from "./components/NFTCard";


const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
    ${'' /* transition: transform 1s ease-in-out; */}
  }
`;

const Form = styled.div`
  width: max-content;
  height: max-content;
  background-color: #99ABA6;
  border-radius: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 16px;
  color: black;
  z-index: 1;
  animation: ${({ showCard }) => showCard ? fadeIn : fadeOut} 0.5s ease-in-out forwards;
`;

const Banner = styled.div`
background-image: url('./city.gif');
background-repeat: no-repeat;
background-size: cover;
border-radius: 50px;
padding: 1rem;
width:80%;
height: 75%;
margin-top: 10rem;
display: flex;
box-shadow: inset 0 0 200px black;`


const BanHead = styled.div`
${'' /* font-size: 5rem; */}
font-weight: bolder;
color: white;
text-align: center;
font-family: Poppins;
${'' /* border: 1px solid white; */}
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 10rem 5rem 5rem 2rem;
`

const Head = styled.h1`
font-size: 10rem;
font-weight: bold;
color: white;
text-align: left;
font-family: Poppins;
`

const Info = styled.p`
font-size: 1.5rem;
font-weight: normal;
line-height: 1.1;
color: white;
text-align: left;
font-family: Poppins;
`
const Button = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: white;
    color: black;
  }
`
const Button2 = styled.button`
  cursor: pointer;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: black;
    color: white;
  }
`
const ButCon = styled.div`
display: flex;
justify-content: flex-start;
margin: 20px 0px;
gap: 1rem;
margin-top: 3rem;
z-index: 10;
`

const ExploreNFTs = () => {
  const [nfts, setNfts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [OriginalNFTs, setOriginalNFTs] = useState([])
  const { fetchMyNFTsOrListedNFTs,fetchNFTs } = useContext(BlockchainConfig);
  const { getMoodDatas } = useContext(FirebaseConfig);
  const [filteredNfts, setFilteredNfts] = useState(nfts);
  const [moodSelected, setMoodSelected] = useState("");
  const filterNfts = async (mood) => {
    setMoodSelected(mood);
    setLoading(true);
    let temp = [];
    if(mood==='all'){
      setFilteredNfts(OriginalNFTs)
      console.log('yes')
    }
    else{
    let dat = await getMoodDatas(mood);
    
    console.log("dd", dat);
    nfts.forEach((item) => {
      console.log("wer", item.image);
      for (let i = 0; i < dat.length; i++) {
        console.log("dddweeeed", item.image === dat[i]);
        if (item.image === dat[i]) {
          temp.push(item);
          console.log("yes");
        }
      }
    })
    setFilteredNfts(temp);
  };
    
    setLoading(false);
  };
  useEffect(() => {
    fetchNFTs(setLoading).then((items) => {
      setNfts(items);
      setFilteredNfts(items);
      setLoading(false);
      setOriginalNFTs(items)
    });
  }, []);

  // if (Loading) {
  //   return (
  //     <div className="flexStart min-h-screen">
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    < div className="min-h-screen bg-[#99FFE3]">

      <MainLayout>
        <div className="flex flex-row justify-center">
      <Banner>
          <BanHead>
            <Head>MarketPlace</Head>
            <Info>Experience our whole new music NFT marketplace</Info>
            <ButCon>
            <a href = "#marketid"><Button>Place Bid</Button></a>  
              <Button2>Explore All</Button2>
            </ButCon>

            {/* {touch && <Form showCard={setTouch}>
              <ArtistReg />
            </Form>} */}
          </BanHead>
         
        </Banner>
        </div>
        {/* <TopNft /> */}


{/* <Hottest /> */}

{/* <Newest /> */}

      <div className="flex justify-center sm:px-4 p-12 min-h-screen">
  

        <div id="marketid" className="w-full minmd:w-4/5">
        {  <div className="flex flex-row justify-evenly">
            {moodSelected === "all"  && !Loading ? (
              <button className="bg-green-500 border-2 border border-green-800 p-3 w-1/5 font-bold text-white rounded-xl mx-3">
                All{" "}
              </button>
            ) : (
              <button
                className="bg-neutral-900 p-3 w-1/5 font-bold text-white rounded-xl mx-3"
                onClick={() => filterNfts("all")}
              >
                All{" "}
              </button>
            )}
            {moodSelected === "happy" ? (
              <button className="bg-green-500    border-2 border border-green-800 p-3 font-bold text-white rounded-xl mx-3">
                Happy 😀{" "}
              </button>
            ) : (
              <button
                className="bg-neutral-900 p-3 w-1/5 font-bold text-white rounded-xl mx-3"
                onClick={() => filterNfts("happy")}
              >
                Happy 😀{" "}
              </button>
            )}
            {/* <button className='bg-neutral-900 p-3 w-1/5 font-bold text-white rounded-xl mx-3' onClick={()=>filterNfts("happy")}> Happy 😀</button> */}

            {moodSelected === "angry" ? (
              <button className="bg-green-500 border-2 border border-green-800 p-3 w-1/5 font-bold text-white rounded-xl mx-3">
               Angry 😡
              </button>
            ) : (
              <button
                className="bg-neutral-900 p-3 w-1/5 font-bold text-white rounded-xl mx-3"
                onClick={() => filterNfts("angry")}
              >
              Angry 😡
              </button>
            )}
            {moodSelected === "sad" ? (
              <button className="bg-green-500 border-2 border border-green-800 p-3 w-1/5 font-bold text-white rounded-xl mx-3">
                Sad ☹️
              </button>
            ) : (
              <button
                className="bg-neutral-900 p-3 w-1/5 font-bold text-white rounded-xl mx-3"
                onClick={() => filterNfts("sad")}
              >
                 Sad ☹️
              </button>
            )}
            {/* <button className='bg-neutral-900 p-3 w-1/5 font-bold text-white rounded-xl mx-3' onClick={()=>filterNfts("angry")}> Angry 😡</button> */}
            {/* <button className='bg-green-800 p-3 w-1/5 font-bold text-white rounded-xl mx-3' onClick={()=>filterNfts("sad")}> sad 😖</button> */}
          </div>}

          <div className="mt-4">
            {!Loading && filteredNfts.length === 0 ? (
              <div className="flexCenter sm:p-4 p-16 ">
                <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">
                  No NFTs Listed for Sale
                </h1>
              </div>
            ) : (
              <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-semibold mt-2 ml-4 sm:ml-2">
                NFTs listed for sale
              </h2>
            )}

            <div className="mt-3 w-full flex flex-wrap justify-center md:justify-center">
              {!Loading && filteredNfts.map((nft) => (
                <>
                  {" "}
                  <NFTCard key={nft.tokenId} nft={nft} />{" "}
                </>
              ))}
              {Loading && <Loader/> }
            </div>
          </div>
        </div>
      </div>
      </MainLayout>
    </div>
  );
};

export default ExploreNFTs;
