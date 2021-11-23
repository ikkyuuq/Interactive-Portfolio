import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function JourneySection() {
    return (
        <Container>

            <InfoSection>
                <Fade left>
                <h4>SKILLS</h4>
                </Fade>
                <Fade left>
                <h1>My Career so far</h1>
                </Fade>
                <Fade left>
                <p>Always up for the challenge, I have to study to graduate from high school and try to get a good score, but during that, I had to learn to code, and the reason is I just want to be a programmer, and now my journeys it just begins!</p>
                </Fade>
            </InfoSection>
            
            <SkillSection> 
                <div class='skill'>HTML/CSS</div>
                <div class='skill'>JAVASCRIPT</div>
                <div class='skill'>REACT</div>
                <div class='skill'>PYTHON</div>
                <div class='skill'>C++</div>
                <div class='skill'>UI DESIGN</div>
                <div class='skill'>UX DESIGN</div>
                <div class='skill'>LEADERSHIPS</div>
                <div class='skill'>PHOTOSHOP</div>
                <div class='skill'>FIGMA</div>
                <div class='skill'>PREMIERE PRO</div>
                <div class='skill'>VISUAL STUDIO CODE</div>
            </SkillSection>
        </Container>
    )
}

export default JourneySection

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFF8F3;  
    display: flex;
    align-items: center;

    @media (max-width: 720px) {
        flex-direction: column;
        height: 100%;
    }
`


const InfoSection = styled.div`
    width: 50%;
    height: auto;
    padding: 0 5%;
    text-align: start;

    h4{
        font-size: 24px;
    }
    h1{
        font-size: 48px;
        margin-bottom: 10px;
    }
    p{
        font-size: 24px;
        line-height: 1.5;
    }

    @media (max-width: 720px) {
        padding: 0 10%;
        width: 100%;
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

const SkillSection = styled.div`
    width: 50%;
    height: auto;
    padding: 0 5%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;

    .skill{
        margin: 5px;
        border: solid 1px black;
        padding: 10px;
        border-radius: 15px;
    }

    @media (max-width: 720px) {
        padding: 0 15%;
        margin-top: 5%;
        margin-bottom: 5%;
        width: 100%;
    }
`