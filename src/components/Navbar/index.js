import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import smooth from 'react-scroll/modules/mixins/smooth';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const toggleAbout = () => {
        scroll.scrollTo(1000, smooth);
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>MyLogo</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/" onClick={toggleHome}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about" onClick={toggleAbout}>About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/projects">Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contact Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>

            <Outlet />
        </>
    )
}

export default Navbar