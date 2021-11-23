import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <p>© 2021 Kittipong Prasompong</p>
            <p><a href="mailto:kittipongprasompong@gmail.com">kittipongprasompong@gmail.com</a></p>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    min-height: 60px;
    background-color: #171717;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    color: white;
    a{
        color: white;
    }
`
