import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Section = styled.div`
height: 100%;
scroll-snap-align: center;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
${'' /* position: absolute; */}
width: 100%;
background-color: #fff;`

const Img = styled.img`
width: 400px;
height: 400px;
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
background-color: black;
background-repeat: no-repeat;
background-size: cover;
padding: 15rem;
display: flex;
flex-direction: column;
justify-content: center;
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
font-size: 6.0rem;
line-height: 5.5rem;
text-align: center;
z-index: 100;
${'' /* font-size: 72px; */}
  background: -webkit-radial-gradient(#00FFBA, #740B98);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const TagLine = styled.p`
z-index: 100;
color: white;
font-family: Poppins;
font-weight: 500
;
font-size: 1.5rem;
margin-top: 2rem;
text-align: center;`

const VideoContainer = styled.div`
position: absolute;
z-index: 1;
width: 100%;
height: 100vh;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
${'' /* padding:2rem; */}
`

const Line = styled.h2`
z-index: 100;
color: white;
font-family: Poppins;
font-weight: bold;
font-size: 6rem;
margin-top: 1rem;
text-align: center;

&:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.01);
    cursor: pointer;
    background: -webkit-radial-gradient(#00FFBA, #740B98);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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

const Button = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  border: 1px solid white;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    border:none;
    background-color: #07CF9E;
    color: black;
  }
`

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


const ReadMore = styled.div`
border:1px solid #451F82;
border-radius: 20px;
padding: 1.5rem;
margin-top: 2rem;
background: -webkit-radial-gradient(#00FFBA, #740B98);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${({ showCard }) => showCard ? fadeIn : fadeOut} 0.5s ease-in-out forwards;`

const InfoPara = styled.p`
font-family: Poppins;
font-weight: 500;
font-size: 1.5rem;
text-align: center;
`

const Info = () => {
    const [Show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!Show)
    }
    return (
        <Section>
            <Container>
                <Line>
                    Coming Soon
                </Line>
                <ButCon>
                    <Button onClick={handleClick}>Read More</Button>
                </ButCon>
                {Show && <ReadMore showCard={setShow}>
                    <InfoPara>We at BeatSpire,<br/> are trying to build an unique way of music therapy <br />based on Human mood and emotions.<br /> Stay tuned for healing your mind and soul through <br />the beats of Music.</InfoPara>
                </ReadMore>}
            </Container>
        </Section>
    )
}

export default Info