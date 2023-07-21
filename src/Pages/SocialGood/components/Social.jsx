import React from 'react'
import styled from 'styled-components'
// import classes from './Background.module.css';

const Section = styled.div`
height: 100%;
scroll-snap-align: center;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
position: relative;
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
  background: -webkit-linear-gradient(#00FFBA, #740B98);
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
`

const Social = () => {
    const videoSource = './banvid.mp4'
    return (
        <Section>
            <Container>
                <VideoContainer>
                    <video autoPlay="autoplay" loop="loop" muted className="video-background">
                        <source src={videoSource} type="video/mp4" /></video>
                </VideoContainer>

                <Header>BeatSpire</Header>
                <TagLine>For Social Good</TagLine>
                <Line>Let music heal you</Line>

            </Container>
        </Section>
    )
}

export default Social