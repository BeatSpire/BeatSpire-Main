import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
${'' /* background-color: white; */}
border-radius: 50px;
padding: 5rem;
width:80%;
height: 70%;
margin: 10rem;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
z-index: 100;
position: relative;
${'' /* border:1px solid red; */}
`

const TopHead = styled.h1`
font-size: 6rem;
font-weight: bolder;
color: white;
text-align: Right;
font-family: Poppins;
line-height: 1.1;`

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
justify-content: flex-end;
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
justify-content: flex-end;
padding: 2rem 20px;
margin: 1rem;
`
const CardBoard = styled.div`
${'' /* display:inline-grid; */}
${'' /* border: 1px solid black; */}
margin-top: 30px;
`

const Img = styled.img`
width: 500px;
height: 180px;
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
justify-content : center;
align-items: center;
margin: 0.5rem;`

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const RiseArtists = () => {
    return (
        <Container>
            <CardBoard>
                <Row>
                    <Card><Img src='./ArtistCard1.png' /></Card>
                    <Card><Img src='./ArtistCard3.png' /></Card>
                </Row>
                <Row>
                    <Card><Img src='./ArtistCard2.png' /></Card>
                    <Card><Img src='./ArtistCard4.png' /></Card>
                </Row>
            </CardBoard>
            <BanHead>
                <TopHead>Rising Artists</TopHead>
                <ButCon><Button>Explore All</Button></ButCon>
            </BanHead>


        </Container>
    )
}

export default RiseArtists