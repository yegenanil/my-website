import {
    Nav, NavbarContainer, MobileIcon,
    NavMenu, NavItem, NavLinks, NavLogo, NavBtn, NavBtnLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">MyLogo</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
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