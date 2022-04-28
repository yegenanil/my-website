import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from "./SidebarElements";
import { animateScroll as scroll } from 'react-scroll';
import smooth from "react-scroll/modules/mixins/smooth";


const Sidebar = ({ isOpen, toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const toggleAbout = () => {
        scroll.scrollTo(1000, smooth);
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggleHome}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/" onClick={toggleAbout}>
                        About Me
                    </SidebarLink>
                    <SidebarLink to="/">
                        Projects
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar