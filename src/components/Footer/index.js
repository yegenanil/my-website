import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
    FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia,
    SocialMediaWrap, WebSiteRights
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            YGN
                        </SocialLogo>
                        <WebSiteRights>ygn © {new Date().getFullYear()} All rights reserved.</WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/an%C4%B1l-ye%C4%9Fen-02ab9a1a8/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/yegenanil" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/ygnanil/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/YegenAn" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/profile.php?id=100002258584146" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer