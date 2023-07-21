import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
${'' /* background-color: white; */}
${'' /* border: 1px solid white; */}
border-radius: 50px;
padding: 5rem;
width:100%;
height: 70%;
margin: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 100;
${'' /* border:1px solid red; */}
`

const TopHead = styled.h1`
font-size: 6rem;
font-weight: bolder;
${'' /* color: #7E3099; */}
  background: -webkit-linear-gradient(#00FFBA, #740B98);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
text-align: center;
font-family: Poppins;
${'' /* line-height: 1.1; */}
`

const Button = styled.button`
  cursor: pointer;
  background-color: #58AE97;
  color: black;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: #540072;
    color: white;
  }
`

const ButCon = styled.div`
display: flex;
justify-content: center;
margin: 20px 0px;
gap: 1rem;
${'' /* margin-top: 3rem; */}
`


const BanHead = styled.div`
${'' /* font-size: 5rem; */}
font-weight: bold;
color: black;
text-align: center;
font-family: Poppins;
${'' /* border: 1px solid red; */}
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
padding: 2rem 20px;
margin: 1rem;
`
const CardBoard = styled.div`
display:inline-grid;
${'' /* border: 0.5px solid #9739F7; */}
border-radius: 40px 0px 0px 40px;
margin-top: 30px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
${'' /* padding: 2rem; */}
${'' /* gap: 1rem; */}
width: 100%;
`

const Img = styled.img`
width: 1000px;
height: 380px;
border-radius: 40px;
${'' /* rotate: 20deg; */}
&:hover{
    transition: 0.3s ease-in-out;
    transform: scale(1.02);
    ${'' /* rotate: 5deg; */}
    cursor: pointer;
}
`

const Card = styled.div`
${'' /* border: 1px solid black; */}
${'' /* border-radius: 40[x]; */}
display:flex;
flex-direction: column;
justify-content : center;
align-items: center;
margin: 0.5rem;
`

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-right: 1rem;
position: relative;
`

const Newest = () => {
    return (
        <Container>
            <BanHead>
                <TopHead>Newest in the game</TopHead>
                <ButCon><Button>Explore All</Button></ButCon>
            </BanHead>
            <CardBoard>
                <Row>
                    <Card><Img src='./credit.svg' /></Card>
                    <Card><Img src='./credit.svg' /></Card>
                    <Card><Img src='./credit.svg' /></Card>
                    <Card><Img src='./credit.svg' /></Card>
                </Row>
            </CardBoard>
        </Container>
    )
}

export default Newest