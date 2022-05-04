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
                    <ProjectsH2>Custom design to React </ProjectsH2>
                    <ProjectsP>I converted Figma, Sketch, Adobe XD etc. designs to React components
                    </ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={icon2} />
                    <ProjectsH2>Freelance</ProjectsH2>
                    <ProjectsP>I still develop clinic app with React, React Router, Redux and ChakraUI
                    </ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={icon3} />
                    <ProjectsH2>I am a self-taught Developer</ProjectsH2>
                    <ProjectsP>I’m currently learning everything there is to know about web development.
                    </ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects