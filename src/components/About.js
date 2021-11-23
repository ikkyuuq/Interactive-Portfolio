import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fade from 'react-reveal/Fade'

function About() {
    return (
        <Container>
            <MainSection>
            <HeroImage>
                <Fade left>
                <img src='./images/aboutimg3.jpg'/>
                </Fade>
            </HeroImage>
            <AboutSection>
                <Fade bottom>
                <TextWrapper>
                    <h4 class='title'>ABOUT</h4>
                    <h1>KITTIPONG</h1>
                    <h1>PRASOMPONG</h1>
                    <h2>IKKYUU 18 YEARS OLD</h2>
                </TextWrapper>
                </Fade>
            </AboutSection>
            </MainSection>
            <SecondaryAboutSection>
                <DetialWrapper>
                <Fade bottom>
                <PersonalWrapper>
                    <h3 class='title'>Personal Profile</h3>
                    <p>Name: Kittipong Prasompong</p>
                    <p>Age: 18 Years old</p>
                    <p>Birth Date: 13 October 2003</p>
                    <p>Address: 55 Soi Lasalle 24 St.Sukumvit 105 Bangna Bangkok 10260 Thailand</p>
                </PersonalWrapper>
                <ContactWrapper>
                    <h3 class='title'>Contact</h3>
                    <div class='facebook'><FacebookIcon/><p>Ikkyuu Prasompong</p></div>
                    <div class='line'><ChatIcon/><p>qlou</p></div>
                    <div class='tell'><PhoneInTalkIcon/><p>(+66)98-106-8486</p></div>
                    <div class='mail'><EmailIcon/><p>kittipongprasompong@gmail.com</p></div>
                    <div class='github'><GitHubIcon/><p>htttps://github.com/ikkyuuq</p></div>
                </ContactWrapper>
                </Fade>
                </DetialWrapper>
            </SecondaryAboutSection>
        </Container>
    )
}

export default About

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFF8F3;  
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
        flex-direction: column;
        height: auto;
        margin-top: auto;
    }
`

const HeroImage = styled.div`
    width: 45%;
    height: 100vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        width: 0%;
        height: auto;
        margin-top: auto;
        img{
            border-radius: 5%;
            width: 100%;
            height: auto;
            object-fit: cover;
        } 
    }
`

const AboutSection = styled.div`
    padding: 0 5%;
    text-align: start;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        padding: 0 10%;
        width: 100%;
        margin-bottom: auto;
        margin-top: 5%;   
        margin-left: auto;
        margin-right: auto;
    }

`

const SecondaryAboutSection = styled.div`
    text-align: start;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        padding: 0 10%;
        width: 100%;
        margin-bottom: auto;
        margin-top: 5%;   
        margin-left: auto;
        margin-right: auto;
    }

`
const TextWrapper = styled.div`
    text-transform: uppercase;
    margin-bottom: 30px;
    h4{
        font-size: 24px;
    }
    h2{
        font-size: 48px;
    }
    h1{
        font-size: 72px;
    }

    @media (max-width: 1024px) {
        h1{
            font-size: 62px;
        }
        h2{
            font-size: 38px;
        }
    }

    
    @media (max-width: 550px) {
        h2{
            font-size: 24px;
        }
        h1{
            font-size: 38px;
        }
    }
`

const DetialWrapper = styled.div`
    text-transform: uppercase;
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    margin-bottom: 20px;
`

const PersonalWrapper = styled.div`
    width: 450px;
    margin-bottom: 20px;
    overflow-wrap: break-word;
    h3.title{
        font-size: 24px;
        margin-bottom: 10px;
    }
    p{
        font-size: 18px;
        line-height: 1.8;
    }

    @media (max-width: 550px){
        width: 100%;
        p{
            font-size: 14px;
            line-height: 1.8;
            word-wrap: break-word;
        }
    }
`

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .facebook, .line, .tell, .mail, .github{
        display: flex;
        align-items: center;
    }
    h3.title{
        font-size: 24px;
        margin-bottom: 10px;
    }
    p{
        font-size: 18px;
        line-height: 1.8;
        margin-left: 5px;
    }

    @media (max-width: 550px){
        width: 100%;
        p{
            font-size: 14px;
            line-height: 1.8;
            word-wrap: break-word;
        }
    }
`
