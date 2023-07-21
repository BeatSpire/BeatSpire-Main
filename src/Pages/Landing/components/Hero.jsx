import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 80vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
position: relative;
width: 100%;
background-color: #000;`

const Img = styled.img`
width: 500px;
height: 500px;
rotate: 20deg;
&:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    rotate: 5deg;
    cursor: pointer;
}
`
const Container = styled.div`
box-sizing: border-box;
height: 100%;
width: 100%;
background-image: url('./Frame 88.png');
background-repeat: no-repeat;
background-size: cover;

padding: 10rem;
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
color: white;
font-family: Poppins;
font-weight: 800;
font-size: 6rem;
line-height: 5.5rem;
`
const TagLine = styled.p`
color: #C283D9;
font-family: Poppins;
font-weight: normal;
font-size: 1.5rem;
margin-top: 2rem;`


const Hero = () => {
  return (
    <Section>
      <Container>
        <Left className='text-start'>
          <Header>Experience Music<br />
            And NFTs like<br />
            Never before</Header>
          <TagLine>Step into the world of music NFTs 
          <br/>And immerse yourself in a <br /> Revolutionary new way to experience <br/>And collect music.</TagLine>
        </Left>
        <Right>
          <Img src='./headset.svg' />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero