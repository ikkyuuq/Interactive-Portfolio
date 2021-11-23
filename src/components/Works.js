import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Works() {
    return (
        <Container>
            <HeroImage>
                <Fade left>
                <img src='./images/worksimg.jpg'/>
                </Fade>
            </HeroImage>
            <WorkWrapper>
                <WorkFlowContainer id="style-1">
                <Fade bottom>
                    <Work>
                        <img src='./images/work1.png'/>
                        <div class='text-wrapper'>
                            <h2 class='title'>Tesla Clone Website</h2>
                            <div class='card-detail-wrapper'>
                                <p class='card-detail'>lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                        </div>
                    </Work>
                    <Work>
                        <img src='./images/work2.png'/>
                        <div class='text-wrapper'>
                            <h2 class='title'>Password Generator</h2>
                            <div class='card-detail-wrapper'>
                                <p class='card-detail'>lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                        </div>
                    </Work>
                    <Work>
                        <img src='./images/work3.png'/>
                        <div class='text-wrapper'>
                            <h2 class='title'>Interactive Portfolio</h2>
                            <div class='card-detail-wrapper'>
                                <p class='card-detail'>lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                        </div>
                    </Work>
                    <Work>
                        <img src='./images/work4.png'/>
                        <div class='text-wrapper'>
                            <h2 class='title'>IDEA: Super safety plugs</h2>
                            <div class='card-detail-wrapper'>
                                <p class='card-detail'>lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                        </div>
                    </Work>
                    </Fade>
                </WorkFlowContainer>
            </WorkWrapper>
        </Container>
    )
}

export default Works

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
    width: 40%;
    height: 100vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    @media (max-width: 1024px) {
        display: none;
    }

    @media (max-width: 720px) {
        display: none;
    }
`

const WorkWrapper = styled.div`
    width: 450px;
    height: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    @media (max-width: 1024px) {
        padding: 0 10%;
        width: 100%;
    }
`

const WorkFlowContainer = styled.div`
    width: 100%;
    height: auto;
    overflow-y: auto;
    padding: 10px;

    @media (max-width: 720px) {
        width: 100%;
    }
`


const Work = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    transition: .3s;

    img{
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 3s ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        position: relative;
        z-index: 1;
        border-radius: 5px;
    }
    .text-wrapper{
        position: absolute;
        width: 100%;
        bottom: 0rem;
        padding: 1rem;
        color: white;
        text-align: start;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.2);
        transition: background-color 1.5s ease;
`
