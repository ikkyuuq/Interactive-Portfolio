import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <MenuItem><a href='/'>Home</a></MenuItem>
            <MenuItem><a href='/about'>About</a></MenuItem>
            <MenuItem><a href='/works' class='view-work'>View Work</a></MenuItem>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100vw;
    min-height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
`

const MenuItem = styled.div`
    margin-left: 20px;
    cursor: pointer;
    a{
        color: black;
    }

    a.view-work{
        color: white;
        background-color: black;
        padding: 5px 15px;
        cursor: pointer;
        border-radius: 15px;
    }
`

