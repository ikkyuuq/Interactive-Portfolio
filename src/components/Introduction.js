import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip'

function Introduction() {
    return (
        <Container>
            <HeroImage>
                <img src='./images/ikkyuu3.jpg'/>
            </HeroImage>
            <InfoSection>
                <Fade bottom>
                <h4>PORTFOLIO</h4>
                </Fade>
                <Fade bottom>
                <h1>Hi there!</h1>
                </Fade>
                <Fade bottom>
                <p>Fuelled by a passion for programming, I have a deep interest in programming and continuously improve myself. Learn more about my journey below.</p>
                </Fade>
            </InfoSection>
        </Container>
    )
}

export default Introduction

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFF8F3;  
    display: flex;
    align-items: center;
    @media (max-width: 720px) {
        flex-direction: column;
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

    @media (max-width: 720px) {
        width: 60%;
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

const InfoSection = styled.div`
    width: 50%;
    height: auto;
    padding: 0 5%;
    text-align: start;
    margin:auto;

    h4{
        font-size: 24px;
    }
    h1{
        font-size: 72px;
    }
    p{
        font-size: 24px;
        line-height: 1.5;
    }

    @media (max-width: 720px) {
        padding: 0 10%;
        width: 100%;
        height: auto;
        margin-bottom: auto;
        margin-top: 5%;
        text-align: center;
    }

    @media (max-width: 550px) {
        h4{
            font-size: 18px;
        }
        h1{
            font-size: 48px;
        }
        p{
            font-size: 18px;
            line-height: 1.5;
        }
    }
`
