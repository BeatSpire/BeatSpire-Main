import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CreateNft from './components/CreateNft';
import SellNfts from './components/SellNfts';
import TopArtists from './components/TopArtists';
import TopNfts from './components/TopNfts';
import SiteBoard from './components/SiteBoard';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import MainLayout from '../MainLayout';
const GlobalStyle = createGlobalStyle`
body{
  ${'' /* margin: 0; */}
  font-family: 'Open Sans', sans-serif;
  font-family: 'Poppins', sans-serif;
}`

const Container = styled.div`
height: 100vh;
${'' /* background-color: #000; */}
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: scroll;
color: black;
background-color: white; 
scrollbar-width: none;
margin: 0px;
width: 100%;  
&::-webkit-scrollbar {
  display: none;
}`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <br/><br/><br/>
        <Container >
          <Hero />
          <TopNfts  />
          <SellNfts  />
          <CreateNft />
          {/* <TopArtists /> */}
          <SiteBoard />
        </Container>
      </MainLayout>
    </>
  );
}

export default App
