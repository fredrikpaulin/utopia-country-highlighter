import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    position: absolute;
    top: calc(50% - 50px);
    right: 25px;

    @media (max-width: 768px) {
        top: calc(50% - 75px);
        right: 15px;
    }

    & > img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        
        @media (max-width: 768px) {
            height: 50px;
            width: 50px;
        }
    }

    & > span.logo_container__status {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        right: 10px;
        background-color: #72bb53;

        @media (max-width: 768px) {
            height: 10px;
            width: 10px;
        }
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