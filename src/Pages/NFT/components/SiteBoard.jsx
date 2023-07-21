import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const LogoHolder = styled.div`
  margin: 20px;

  border: 1px solid #156f65;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    border: 1px solid white;
  }
`;
const ImageHolder = styled.div`
  margin: 20px;
`;

const Section = styled.div`
  // height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #000;
`;

const Img = styled.img`
  width: 500px;
  height: 180px;
  ${"" /* rotate: 20deg; */}
  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.02);
    ${"" /* rotate: 5deg; */}
    cursor: pointer;
  }
`;
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  ${"" /* border: 1px solid black; */}
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const Img2 = styled.img`
  width: 200px;
`;

const Topics = styled.div`
  box-sizing: border-box;
  height: 100%;

  border: 1px solid #156f65;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${"" /* border: 1px solid white; */}
  ${"" /* margin-top:3rem; */}
&:hover {
    border: 1px solid white;

    transition: 0.3s ease-in-out;
    transform: scale(1.01);
  }
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* background-color: #09131B; */}
  ${"" /* border:1px solid black; */}
width: 100%;
  border-radius: 0px 0px 20px 20px;
  background-color: #09131b;
`;

const MapSite = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${"" /* border: 1px solid black; */}
  box-sizing: border-box;
  margin-top: 5rem;
  padding: 5rem;
  border-radius: 20px 20px 0px 0px;
  background-color: #09131b;
  color: #99ffe3;
  width: 100%;
`;

const Info = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const List = styled.ul`
  list-style-type: none;
  text-align: center;
`;

const ListItem = styled.li`
  margin: 20px;
  list-style-type: none;
  text-align: center;
  border-color: @;
`;

const Head = styled.h1`
  ${
    "" /* display:flex;
${'' /* text-align: center; */
  }
  position: relative;
  ${"" /* justify-content: center; */}
  ${"" /* align-items: center */}
font-size: 30px;
  font-family: Poppins;
  font-weight: bold;
  color: #07cf9e;
`;

const SG = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #07cf9e;
  font-family: Poppins;
`;

const SiteBoard = () => {
  return (
    <Section className="min-h-screen  ">
      <Container>
        <MapSite className="flex flex-row justify-start  flex-wrap">
       
            <Topics className="w-1/5 min-h-92">
            <Link to="#">
              <Head>BeatSpire</Head>
              <Info>
                The worlds first <br />
                digital marketplace
                <br />
                for crypto music
                <br /> collectibles <br />
                and <br />
                musical non- <br />
                fungible tokens <br />
                (NFTs).
              </Info>
              </Link>
            </Topics>
      
        
            <Topics className="w-1/5 min-h-92">
            <Link to="#">
              <Head>Home</Head>
              <List>
                <ListItem>Experiece Music & NFTs</ListItem>
                <ListItem>Top NFTs</ListItem>
                <ListItem>Sell your NFTs</ListItem>
                <ListItem>Top Artists</ListItem>
              </List>
              </Link>
            </Topics>
         

            <Topics className="w-1/5 min-h-92">
            <Link to="artist">
              <Head>Artists</Head>
              <List>
                <ListItem>Experiece Music & NFTs</ListItem>
                <ListItem>Top NFTs</ListItem>
                <ListItem>Sell your NFTs</ListItem>
                <ListItem>Top Artists</ListItem>
              </List>
              </Link>
            </Topics>
     
    
            <Topics className="w-1/5 min-h-92">
            <Link to="market">
              <Head>Marketplace</Head>
              <List>
                <ListItem>Experiece Top NFTs</ListItem>
                <ListItem>Hottest Collections</ListItem>
                <ListItem>Newest in the Game</ListItem>
                <ListItem>Classic Collections</ListItem>
              </List>
              </Link>
            </Topics>
      
        
            <Topics className="w-1/5 min-h-92">
            <Link to="socialgood">
              <Head>
                <SG>Social Good</SG>
              </Head>
              <List>
                <ListItem>Coming Soon</ListItem>
                <ListItem>Coming Soon</ListItem>
                <ListItem>Coming Soon</ListItem>
                <ListItem>Coming Soon</ListItem>
              </List>
              </Link>
            </Topics>
         
        </MapSite>

        <CopyRight>
          <ImageHolder>
            <Img2 src="./Copyright 2023 BeatSpire.svg" />
          </ImageHolder>
        </CopyRight>
      </Container>
    </Section>
  );
};

export default SiteBoard;
