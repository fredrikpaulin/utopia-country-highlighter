import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    position: absolute;
    top: calc(50% - 50px);
    right: 25px;

    & > img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }

    & > span.logo_container__status {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        right: 10px;
        background-color: #72bb53;
    }
`

const LogoComp = () => {
    return(
        <LogoContainer>
            <img src='https://utopiamusic.com/logo.png' alt="logo" />
            <span className="logo_container__status"></span>
        </LogoContainer>
    )
}

export default LogoComp