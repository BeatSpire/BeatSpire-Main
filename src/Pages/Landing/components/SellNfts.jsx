import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
background-color: #000;`

const Img = styled.img`
// width: 600px;
// height: 600px;
z-index: 1000;
// border-radius: 3rem;
${'' /* rotate: 20deg; */}
&:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    rotate: -5deg;
    cursor: pointer;
}
`
const Container = styled.div`
box-sizing: border-box;
width: 100%;
${'' /* border: 1px solid black; */}
margin: 20rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;`

const Left = styled.div`
${'' /* border: 1px solid black; */}
margin:20px;
`

const Right = styled.div`
${'' /* border: 1px solid black; */}
margin: 20px;
`
const Header = styled.h1`
color: #5A199C;
font-family: Poppins;
font-weight: 800;
font-size: 6rem;
line-height: 6rem;
`
const TagLine = styled.p`
color: #00FFBA;
font-family: Poppins;`

const Button = styled.button`
  cursor: pointer;
  background-color: #540072;
  color: #00FFBA;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: #00B78A;
    color: black;
  }
`
const ButCon = styled.div`
display: flex;
justify-content: flex-start;
margin: 20px 0px;
`

const SellNfts = () => {
    return (
        <Section>
            <Container>
                <Left className='text-start'>
                    <Header>Sell your
                        <br /> NFTs</Header>
                    <TagLine>Monetize your music and trade rare, one-of-a-kind <br /> NFTs on our secure music NFT marketplace</TagLine>
                   <Link to="/artist"> <ButCon><Button>I'm An Artist</Button></ButCon></Link>
                </Left>
                <Right>
                    <Img  className='rounded-xl w-screen'  src='./music-cred.png' />
                </Right>
            </Container>
        </Section>
    )
}

export default SellNfts