import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
background-color: black;`

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
const Container = styled.div`
box-sizing: border-box;
width: 100%;
${'' /* border: 1px solid black; */}
margin-top: 1px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 2rem;`

const Left = styled.div`
${'' /* border: 1px solid black; */}
margin:20px;
padding: 40px;
`

const Right = styled.div`
${'' /* border: 1px solid black; */}
margin: 20px;
padding: 40px;
`
const Header = styled.h1`
color: white;
font-family: Poppins;
font-weight: 800;
font-size: 6rem;
line-height: 6.5rem;
text-align: right;
`

const TagLine = styled.p`
color: #540072;
text-align: right;`


const Button = styled.button`
  cursor: pointer;
  background-color: #540072;
  color: #00FFBA;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  ${'' /* margin: 1px; */}
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
margin: 10px 0px;
`
const CardBoard = styled.div`
${'' /* display:inline-grid; */}
${'' /* border: 1px solid black; */}
margin-top: 30px;
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

const Img2 = styled.img`
width: 200px;
`
const TopArtists = () => {
  return (
    <Section>
      <Container>
        <Header>Top artists</Header>
        <Button>See All</Button>
        <CardBoard>
          <Row>
            <Card><Img src='./ArtistCard1.png' /></Card>
            <Card><Img src='./ArtistCard2.png' /></Card>
          </Row>
          <Row>
            <Card><Img src='./ArtistCard3.png' /></Card>
            <Card><Img src='./ArtistCard4.png' /></Card>
          </Row>
        </CardBoard>
      </Container>
    </Section>
  )
}

export default TopArtists