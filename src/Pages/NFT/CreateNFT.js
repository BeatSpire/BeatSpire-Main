import React, { useState, useMemo, useCallback, useContext } from "react";

import { useDropzone } from "react-dropzone";

import styled from "styled-components";
import Button from "../Actors/components/Button";
import Input from "../Actors/components/Input";
import "../../home.module.css";
import { BlockchainConfig } from "../../BackendConfig/BlockchainConfig";
import Navbar from "../Landing/components/Navbar";
import { FirebaseConfig } from "../../BackendConfig/FirebaseConfig";
import { MenuItem, Select } from "@mui/material";
import { CoverImgUpload } from "./components/CoverImgUpload";
import { Loader } from "./components/Loader";
import MainLayout from "../MainLayout";


const Card = styled.div`
  &:hover {
    border-radius: 10px;
    border: 10px solid #d0fff2;
    ${"" /* padding: 0.5rem; */}
    transition: 0.2s ease-in-out;
    transform: scale(1.01);
    
  }
`;
const Banner = styled.div`
${'' /* background-image: url('./city.gif'); */}
background-color: #B4ABAB;
background-repeat: no-repeat;
background-size: cover;
border-radius: 50px;

width:80%;
height: 75%;

display: flex;
flex-direction: column;
justify-content: center;

box-shadow: inset 0 0 200px black;`

const ButCom = styled.button`
  background-color: #00c594;
  padding: 15px;
  margin-top: 30px;
  border-radius: 20px;
  font-family: Poppins;
  &:hover {
    background-color: black;
    color: #00ffba;
    transition: 0.3s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 5px 10px 0 #1e4a3f;
  }
`;

const CreateNFT = () => {
  const [fileUrl, setFileUrl] = useState("");
const [mood1, setMood1] = useState("")
const [mood2, setMood2] = useState("")
const [mood3, setMood3] = useState("")
const [AlbumCoverImg, setAlbumCoverImg] = useState("")

  const [formInput, setFormInput] = useState({
    price: "",
    name: "",
    description: "",
    mood1: "",
    mood2: "",
    mood3: "",
  });

  const { uploadToIPFS, createNFT } = useContext(BlockchainConfig);
  const { uploadArtOffChain } = useContext(FirebaseConfig);
  const [uploadLoading, setUploadLoading] = useState(false);
  const onDrop = useCallback(async (acceptedFile) => {
    console.log(acceptedFile[0].type);
    if (
      acceptedFile[0].type === "video/webm" ||
      acceptedFile[0].type === "audio/mpeg"
    ) {
      const url = await uploadToIPFS(acceptedFile[0]);
      console.log({ url });
      setFileUrl(url.replace("ipfs://", "https://ipfs.io/ipfs/"));
    } else {
      alert("only audio file");
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 50000000,
  });
  const handleCreation = async () => {
    setUploadLoading(true);
    formInput.mood1=mood1
    formInput.mood2=mood2
    formInput.mood3=mood3
    const urlReturned = await createNFT(formInput, fileUrl);
    await uploadArtOffChain(
      urlReturned,
      formInput.mood1,
      formInput.mood2,
      formInput.mood3,
      CoverImgUpload
    );
    setFormInput({
      price: "",
      name: "",
      description: "",
      mood1: "",
      mood2: "",
      mood3: "",
    })
    setMood1("")
    setMood2("")
    setAlbumCoverImg("")
    
    setMood3("")

    setUploadLoading(false);
  };

  const fileStyle = useMemo(
    () => `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
        ${isDragActive && "border-file-active"} 
        ${isDragAccept && "border-file-accept"}
        ${isDragReject && "border-file-reject"}
      `,
    [isDragActive, isDragAccept, isDragReject]
  );

  return (
    <MainLayout>
      <div className="bg-black">
        
      </div>
      <br/><br/><br/>
      <div className="flex flex-row justify-center">
<Banner>
      <div className="flex justify-center sm:px-4 p-12">
        {/* <div className='bg-red'>Hi</div> */}
        <div className="w-3/5 md:w-full">
          <h1 className="font-poppins  dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-extrabold ml-4 sm:mb-4">
            Create New NFT
          </h1>
          {/* <audio controls>
      <source   src = "https://ipfs.io/ipfs/bafybeid5gljppqk6ti3eb2x7mbvgjghafe4xyugabapb7yyiis2bnhnkzq/y2mate.com%20-%20Sickick%20Infected%20Ringtone%20%20New%20Ringtone%202022%20%20Attitude%20BGM%20Ringtone%20%20Ringtones%20Addict%20.mp3"  type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio> */}
          <div className="mt-16">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
              Upload files
            </p>
            <Card className="mt-4">
              <div {...getRootProps()} className={fileStyle}>
                <input {...getInputProps()} />
                <div className="flexCenter flex-col text-center">
                  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                    Audio files
                  </p>
                  <div className="my-12 w-full flex justify-center"></div>
                  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                    Drag and Drop File
                  </p>
                  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mt-2">
                    or Browse media on your device
                  </p>
                </div>
              </div>
              {fileUrl && (
                <aside>
                  <div>
                    <img src={fileUrl} alt="asset_file" />
                  </div>
                </aside>
              )}
            </Card>
          </div>
          
          <Input
            inputType="input"
            title="Name"
            placeholder="NFT Name"
            handleClick={(e) =>
              setFormInput({ ...formInput, name: e.target.value })
            }
          />
          <Input
            inputType="textarea"
            title="Desciption"
            placeholder="Description of your NFT"
            handleClick={(e) =>
              setFormInput({ ...formInput, description: e.target.value })
            }
          />
          <Input
            inputType="number"
            title="Price"
            placeholder="Enter Price"
            handleClick={(e) =>
              setFormInput({ ...formInput, price: e.target.value })
            }
          />
          <br/><br/>
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Select your moods behind the artwork 🎧</p>
<br/>
<CoverImgUpload onChange={(file) => setAlbumCoverImg(file[0])} />

      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Select your moods behind the artwork 🎧</p>
<br/>
      <div className="flex flex-row justify-evenly">
<div>
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Mood #1</p>
       
       <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={mood1}
    label="Age"
    onChange={(e)=>setMood1(e.target.value)}
  >
    <MenuItem value="happy">Happy 😄</MenuItem>
    <MenuItem value="sad">Sad🥺</MenuItem>
    <MenuItem value="angry">Angry😡</MenuItem>
  </Select>
  </div><div>
  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Mood #2</p>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={mood2}
    label="Age"
    onChange={(e)=>setMood2(e.target.value)}
  >
    <MenuItem value="happy">Happy 😄</MenuItem>
    <MenuItem value="sad">Sad🥺</MenuItem>
    <MenuItem value="angry">Angry😡</MenuItem>
  </Select>
  </div><div>
  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Mood #3</p>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={mood3}
    label="Age"
    onChange={(e)=>setMood3(e.target.value)}
  >
    <MenuItem value="happy">Happy 😄</MenuItem>
    <MenuItem value="sad">Sad🥺</MenuItem>
    <MenuItem value="angry">Angry😡</MenuItem>
  </Select>
  </div>
  </div>
          <div className="mt-7 w-full flex justify-center">
            {uploadLoading ? (
              <Loader/>
            ) : (formInput.name && formInput.description &&mood1 &&formInput.price && CoverImgUpload  )? (
              <button
                btnName="Create NFT"
                className="rounded-xl bg-black"
                onClick={handleCreation}
              >
                Create NFT
              </button> ):(  <button
                btnName="Create NFT"
                className="rounded-xl bg-black text-3xl text-white font-bold p-3 cursor-not-allowed"
                
              >
                Create NFT
              </button>
            )}
          </div>
        </div>
      </div>
      </Banner>
      </div>
    </MainLayout>
  );
};

export default CreateNFT;
