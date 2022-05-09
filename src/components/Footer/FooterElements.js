import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled.a`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    
    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

export const WebSiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;    
    align-items: center;
    width: 240px;

    @media screen and (max-width: 820px) {
        align-items: center;
        justify-content: center;
    }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin-right: 25px;
    

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }

`;