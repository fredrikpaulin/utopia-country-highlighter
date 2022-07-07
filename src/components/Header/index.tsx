import React from 'react'
import styled from 'styled-components'
import LogoComp from '../LogoComp'

const StyledHeader = styled.div`
    height: 188px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222;
    color: #fff;
    text-align: center;

    & > h1 {
        font-size: 44px;
        line-height: 1.2;
        font-weight: 300;
    }
`

const Header = () => {
    return(
        <StyledHeader>
            <h1>Utopia Country Highlighter</h1>
            <LogoComp />
        </StyledHeader>
    )
}

export default Header