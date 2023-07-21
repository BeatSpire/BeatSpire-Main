import React, { useContext, useState } from "react";
import { BlockchainConfig } from "../../BackendConfig/BlockchainConfig";
import { FirebaseConfig } from "../../BackendConfig/FirebaseConfig";
import Navbar from "../Landing/components/Navbar";
import styled, { keyframes } from "styled-components";
import MainLayout from "../MainLayout";
import ArtistDashboard from "./ArtistDashboard";

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
    ${"" /* transition: transform 1s ease-in-out; */}
  }
`;

const Form = styled.div`
  width: max-content;
  height: max-content;
  background-color: #b4abab;
  border-radius: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 16px;
  color: black;
  z-index: 1;
  animation: ${({ showCard }) => (showCard ? fadeIn : fadeOut)} 0.5s ease-in-out
    forwards;
`;

const Banner = styled.div`
  background-image: url("./galaxy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  padding: 1rem;
  width: 80%;
  height: 75%;
  margin-top: 10rem;
  display: flex;
  box-shadow: inset 0 0 200px black;
`;

const BanHead = styled.div`
  ${"" /* font-size: 5rem; */}
  font-weight: bolder;
  color: white;
  text-align: center;
  font-family: Poppins;
  ${"" /* border: 1px solid white; */}
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10rem 5rem 5rem 2rem;
`;

const Head = styled.h1`
  font-size: 10rem;
  font-weight: bold;
  color: white;
  text-align: left;
  font-family: Poppins;
`;

const Info = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.1;
  color: white;
  text-align: left;
  font-family: Poppins;
`;
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
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: white;
    color: black;
  }
`;
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
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: black;
    color: white;
  }
`;
const ButCon = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0px;
  gap: 1rem;
  margin-top: 3rem;
  z-index: 10;
`;

const Section = styled.div`
  // height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 5rem;
  height: 80vh;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.div`
  ${"" /* height: 100vh; */}

  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  margin: 3rem;
  width: 100%;
  height: max-content;
`;

const Span = styled.div`
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background-color: #00c594;
  padding: 30px;
  border-radius: 20px;
  color: black;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #260b41;
    transition: 0.3s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 5px 10px 0 #1e4a3f;
    color: #00ffba;
    cursor: pointer;
  }
`;
export const ArtistProfile = () => {
  const [touch, setTouch] = useState(false);

  const handleClick = () => {
    setTouch(!touch);
  };
  const { artistData } = useContext(FirebaseConfig);
  const { currentAccount, connectWallet } = useContext(BlockchainConfig);
  return (
    <div className="min-h-screen ">
      {currentAccount ? (
        <>
          {artistData.name && artistData.verified ? (
            <>
              <ArtistDashboard data={artistData} />
            </>
          ) : artistData.name.length>0 && !artistData.verified ? (
            <MainLayout>
              <Section>
                <Banner>
                  <BanHead>
                    <Head>Artists</Head>
                    <Info>
                      Step into the world of music NFTs and immerse yourself in
                      a <br /> Revolutionary new way to experience and collect
                      music.
                    </Info>
                    <ButCon>
                      <Button>
                        You have not been verified yet. Kindly wait till you get
                        verified
                      </Button>
                    </ButCon>
                  </BanHead>
                </Banner>
              </Section>
            </MainLayout>
          ) : (
            <MainLayout>
              <Section>
                <Banner>
                  <BanHead>
                    <Head>Artists</Head>
                    <Info>
                      Step into the world of music NFTs and immerse yourself in
                      a <br /> Revolutionary new way to experience and collect
                      music.
                    </Info>
                    <ButCon>
                      <Button onClick={handleClick}>I'm An Artist</Button>
                      <Button2>Explore All</Button2>
                    </ButCon>
                  </BanHead>
                </Banner>{" "}
                <a href="regartist">
                  {" "}
                  <Span> Register as a artist to proceed </Span>
                </a>
              </Section>
            </MainLayout>
          )}
        </>
      ) : (
        <MainLayout>
          {" "}
          <Section>
            <Banner>
              <BanHead>
                <Head>Artists</Head>
                <Info>
                  Step into the world of music NFTs and immerse yourself in a{" "}
                  <br /> Revolutionary new way to experience and collect music.
                </Info>
                <ButCon>
                  <Button onClick={handleClick}>I'm An Artist</Button>
                  <Button2>Explore All</Button2>
                </ButCon>

                {touch && (
                  <Form showCard={setTouch}>
                    {/* <ArtistReg /> */}
                    <div>reg</div>
                  </Form>
                )}
              </BanHead>
            </Banner>
            <Span onClick={connectWallet}>Connect your wallet to proceed</Span>
          </Section>
        </MainLayout>
      )}
    </div>
  );
};
