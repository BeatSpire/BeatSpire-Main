import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
background-color: #000;`

const Img = styled.img`
// width: 700px;
// height: 700px;
// border-radius: 2rem;
${'' /* z-index: 1000; */}
${'' /* rotate: 20deg; */}
&:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    rotate: 5deg;
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
color: #99FFE3;
font-family: Poppins;
font-weight: 800;
font-size: 6rem;
line-height: 6.5rem;
text-align: right;
`
const TagLine = styled.p`
text-align: right;
color: #E6A0FF;
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
justify-content: flex-end;
margin: 20px 0px;
`
const TopNfts = () => {
    return (
        <Section className='text-start'>
            <Container className='text-start'>
                <Left className='text-start'>
                    <Img className='rounded-xl w-screen'  src='./cred.png' />
                </Left>
                <Right>
                    <Header className='text-start'>Explore Top NFTs</Header>
                    <TagLine className='text-start'>Discover the most sought-after digital assets of the <br /> Moment with our curated selection of top NFTs.</TagLine>
                    <ButCon><Button>See All</Button></ButCon>

                </Right>
            </Container>
        </Section>
    )
}

export default TopNfts
