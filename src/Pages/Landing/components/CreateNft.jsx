import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
background-color: black;`

const Img = styled.img`
width: 400px;
height: 400px;
${'' /* rotate: 20deg; */}
&:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    rotate: 5deg;
    cursor: pointer;
}
`
const Container = styled.div`
background-color: #260B41;
border-radius: 20px;
box-sizing: border-box;
width: 100%;
${'' /* border: 1px solid white; */}
margin: 20rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;`

const Left = styled.div`
${'' /* border: 1px solid white; */}
border: 1px solid #7A48AB;
border-radius: 20px;
margin:20px;
padding: 40px;

&:hover{
  border: 1px solid #99FFE3;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  transform: scale(1.01);
  cursor: pointer;
}
`

const Right = styled.div`
${'' /* border: 1px solid white; */}
border: 1px solid #7A48AB;
border-radius: 20px;
margin: 20px;
padding: 40px;

&:hover{
  border: 1px solid #99FFE3;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  transform: scale(1.01);
  cursor: pointer;
}
`
const Header = styled.h1`
color: #99FFE3;
font-family: Poppins;
font-weight: 800;
font-size: 3rem;
line-height: 6.5rem;
text-align: center;
${'' /* border: 1px solid white; */}
`
const TagLine = styled.p`
color: #99FFE3;
font-weight: lighter;
text-align: center;
font-family: Poppins;

&:hover{
  color:white;
}`


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
const Middle = styled.div`
${'' /* border: 1px solid white; */}
border: 1px solid #7A48AB;
border-radius: 20px;
margin: 20px;
padding: 40px;

&:hover{
  border: 1px solid #99FFE3;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  transform: scale(1.01);
  cursor: pointer;
}
`
const Topics = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 50px;
`
const SmallHead = styled.h3`
color:#99FFE3;
font-family: Poppins;
text-align: center;`

const CreateNft = () => {
  return (
    <Section>
      <Container>
        <Header>Create and sell your NFTs instantly</Header>
        <Topics>
          <Left>
            <SmallHead>
              Set up your <br />Wallet
            </SmallHead>
            <TagLine>
              After setting up the wallet, connect the wallet to the platform and complete the verification process to get started.
            </TagLine>
          </Left>
          <Middle>
            <SmallHead>Upload Sound Clips or songs</SmallHead>
            <TagLine>
              After uploading your masterpiece, lets us make it unique.
            </TagLine>
          </Middle>
          <Right>
            <SmallHead>LIst them for <br />sale</SmallHead>
            <TagLine>
              Choose between auctions. fixed-price
              listings, and declining. price listings.
              You choose how you want.
            </TagLine>
          </Right>
        </Topics>
      </Container>
    </Section>
  )
}

export default CreateNft