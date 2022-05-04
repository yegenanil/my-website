import { ProjectsCard, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper } from "./ProjectElements"
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
 

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={icon1} />
                    <ProjectsH2>Lorem ipsum dolor sit amet </ProjectsH2>
                    <ProjectsP>Dolores molestias quae rem ipsam labore voluptatibus architecto optio
                        </ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={icon2} />
                    <ProjectsH2>Lorem ipsum dolor sit amet </ProjectsH2>
                    <ProjectsP>Dolores molestias quae rem ipsam labore voluptatibus architecto optio doloribus
                        </ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={icon3} />
                    <ProjectsH2>Lorem ipsum dolor sit amet </ProjectsH2>
                    <ProjectsP>Dolores molestias quae rem ipsam labore voluptatibus architecto
                        </ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects