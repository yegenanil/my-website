import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from "./SidebarElements"

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">
                        About Me
                    </SidebarLink>
                    <SidebarLink to="/contact">
                        Contact Me
                    </SidebarLink>
                    <SidebarLink to="/about">
                        About Me
                    </SidebarLink>
                    <SidebarLink to="/about">
                        About Me
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar