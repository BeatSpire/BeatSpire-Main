import React from 'react'
import MainLayout from '../MainLayout'
import styled, { keyframes } from 'styled-components'
import TopArtists from '../Landing/components/TopArtists'
import SiteBoard from '../Landing/components/SiteBoard'
import CreateNft from '../Landing/components/CreateNft'
import RiseArtists from './components/RiseArtists'
import { useState } from 'react'
import { Link } from 'react-router-dom'


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

const Form = styled.div`
  width: max-content;
  height: max-content;
  background-color: #99ABA6;
  border-radius: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 16px;
  color: black;
  z-index: 1;
  animation: ${({ showCard }) => showCard ? fadeIn : fadeOut} 0.5s ease-in-out forwards;
`;

const Banner = styled.div`
background-color: #B4ABAB;
${'' /* background: -webkit-linear-gradient(#00FFBA, #740B98); */}
background-repeat: no-repeat;
background-size: cover;
border-radius: 50px;
padding: 1rem;
width:80%;
height: 75%;
margin-top: 10rem;
display: flex;
flex-direction: column;
box-shadow: inset 0 0 200px black;`


const BanHead = styled.div`
${'' /* font-size: 5rem; */}
font-weight: bolder;
color: white;
text-align: center;
font-family: Poppins;
border: 1px solid black;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 10rem 5rem 5rem 2rem;
`

const Head = styled.h1`
margin: 2rem 2rem;
font-size: 6rem;
font-weight: bold;
color: #3C168B;
  ${'' /* background: -webkit-radial-gradient(#00FFBA, #740B98);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */}
text-align: left;
font-family: Poppins;
`

const Info = styled.p`
font-size: 1.5rem;
font-weight: normal;
line-height: 1.1;
color: white;
text-align: left;
font-family: Poppins;
`
const Button = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: white;
    color: black;
  }
`
const Button2 = styled.button`
  cursor: pointer;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: black;
    color: white;
  }
`
const ButCon = styled.div`
display: flex;
justify-content: flex-start;
margin: 20px 10px;
gap: 1rem;
margin-top: 3rem;
z-index: 10;
`
const ProfilePic = styled.div`
display: flex;
border: 3px dashed black;
border-radius: 200%;
box-sizing : border-box;
// padding:1rem;
// margin: 2rem;
width: 200px;
height: 200px;
flex-direction: column;
justify-content: center;
align-items: center;
&:hover{
  transition: 0.2s ease-in-out;
  transform: scale(1.1);
  ${'' /* background-color: black; */}
  border: 3px solid black;
  color: white;
  cursor: pointer;

}
`
const ProfHead = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
font-family: Poppins;
font-size: 2rem;
font-weight: bold;
${'' /* border:1px solid black; */}
margin:2rem;`


const Img = styled.img`
width: 30px;
height:30px;`

const Img2 = styled.img`
width: 50px;
height:50px;`

const Prof = styled.div`
${'' /* border: 1px solid black; */}
display: flex;
flex-direction: row;
justify-content: space-between;
`

const ProfInfo = styled.div`
flex:2;
${'' /* border: 1px solid black; */}
padding : 2rem;
margin: 2rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: left;`

const Name = styled.div`
font-size: 2rem;
font-family: Poppins;
font-weight: bold;
text-align: left;
${'' /* border: 1px solid black; */}
${'' /* width: 100%; */}
`

const Join = styled.div`
color: #534F4F;
font-weight: bold;
font-size: 1.5rem;
font-family: Poppins;
text-align: left;
${'' /* border: 1px solid black; */}
width: 100%;`

const Wallet = styled.div`
font-weight: bold;
color: #534F4F;
font-size: 1.5rem;
font-family: Poppins;
text-align: left;
${'' /* border: 1px solid black; */}
width: 100%;`

const Verified = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
font-family: Poppins;
font-size: 2rem;
font-weight: bold;
gap: 1rem;
width:100%;`

const Profiles = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
text-align: left;
${'' /* border: 1px solid black; */}
${'' /* width: 100%; */}
`
const Address = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 100%;
align-items: center;`

const ButCon2 = styled.div`
display: flex;
justify-content: flex-start;
${'' /* margin: 0px 4rem; */}
${'' /* gap: 1rem; */}
${'' /* margin-top: 3rem; */}
z-index: 10;
${'' /* border:1px solid black; */}
padding-left: 4rem;
${'' /* margin: 0rem 2rem; */}
width: 100%;`

const Analytics = styled.div`
display: flex;
flex-direction: column;`

const AnalyticsHead = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
font-family: Poppins;
font-size: 2rem;
font-weight: bold;
${'' /* border:1px solid black; */}
padding-left: 3.5rem;
padding-top: 2rem;`

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
text-align: left;
${'' /* border: 1px solid black; */}`

const Topic = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: left;
${'' /* border: 1px solid black; */}
width: 100%;
font-family: Poppins;
font-size: 1.5rem;
font-weight: bold;
color: #534F4F;
`
const Hed = styled.div`
display: flex;
flex-direction: row;
${'' /* border: 1px solid black; */}
width: 100%;
padding: 1rem 0rem;
padding-left: 2rem;`

const Num = styled.div`
${'' /* border: 1px solid black; */}
width: 100%;
display: flex;
font-family: Poppins;
font-size: 5rem;
font-weight: bold;
color: black;
flex-direction: row;
padding-left: 2rem;`

const Fact = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: left;
${'' /* border: 1px solid black; */}
${'' /* width: 100%; */}
font-family: Poppins;`

const Coin = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Icons = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${'' /* border: 1px solid black; */}
${'' /* marign-top: 2rem; */}
`

const ButCon3 = styled.div`
display: flex;
justify-content: flex-end;
margin: 20px 10px;
gap: 1rem;
margin-top: 3rem;
${'' /* border:1px solid black; */}
width: 100%;
padding-right: 0.5rem;
z-index: 10;`

const Button1 = styled.button`
cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 200%;
  padding: 30px 30px;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
  }`

const ArtistDashboard = (props) => {
  const [touch, setTouch] = useState(false);
  const data = props.data;
  const handleClick = () => {
    setTouch(!touch);
  }

  return (
    <MainLayout>
      <div className='flex flex-col items-center justify-center'>
        <Banner>
          <Head>Your Dashboard</Head>
          <ProfHead>
            Profile Picture
          </ProfHead>
          <Prof>
            <ProfilePic>
              <img  className='rounded-full' src={data.dp} />
            </ProfilePic>
            <ProfInfo>
              <Verified>
                <Name>{data.name}</Name>
                <Img src='.././tick.png' />
              </Verified>

              <Join>Joined July 2023
              </Join>
              <Address>
                <Img src='.././solana.svg' />
                <Wallet>{data.wallet}</Wallet>
              </Address>

            </ProfInfo>
            <Icons>
              <ButCon3><Link to='/create' style={{ textDecoration: 'none' }}><Button1><Img src='.././upload.png' /></Button1></Link></ButCon3>
              <Profiles>
                <ButCon> <Button><Img src='.././twitter.svg' /></Button></ButCon>
                <ButCon><Button><Img src='.././spotify.svg' /></Button></ButCon>
                <ButCon><Button><Img src='.././sound.svg' /></Button></ButCon>
              </Profiles>
            </Icons>

          </Prof>
          <ButCon2><Button>Visit Profile</Button></ButCon2>
          <Analytics>
            <AnalyticsHead>Analytics</AnalyticsHead>
            <Row><Topic><Hed>Your NFT Sales(All Time)</Hed>
              <Num>0</Num></Topic>
              <Topic><Hed>Profile Visits</Hed>
                <Num>20</Num></Topic></Row>
            <Row><Topic><Hed>Total earnings</Hed>
              <Num><Fact>0</Fact>
                <Coin><Img2 src='.././solana.svg' /></Coin>
              </Num></Topic>
              <Topic><Hed>ranking</Hed>
                <Num>0</Num></Topic></Row>
          </Analytics>
        </Banner>
        <div className="gradient-01 z-0" />
        <div className='flex flex-col relative justify-center'>
          <TopArtists />
          <div className="gradient-03 z-0" />
        </div>

        <CreateNft />

        <div className="relative">
          <RiseArtists />
          <div className="gradient-02 z-0" />

        </div>
        <SiteBoard />
        {/* <div className='footer-gradient z-0' /> */}

      </div>
    </MainLayout>

  )
}

export default ArtistDashboard