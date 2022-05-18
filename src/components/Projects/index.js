import { ProjectsCard, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper } from "./ProjectElements"
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import berlin from "../../images/berlin.png";


const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard href="https://github.com/yegenanil?tab=repositories" target="_blank">
                    <ProjectsIcon src={icon1} />
                    <ProjectsH2>Custom design to React </ProjectsH2>
                    <ProjectsP>I converted Figma, Sketch, Adobe XD etc. designs to React components
                    </ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={icon2} />
                    <ProjectsH2>Freelance</ProjectsH2>
                    <ProjectsP>I have developed a clinic app with React, React Router, Redux, and ChakraUI
                    </ProjectsP>
                </ProjectsCard>
                <ProjectsCard href="https://weatherygn.netlify.app/" target="_blank">
                    <ProjectsIcon src={berlin} />
                    <ProjectsH2>Weather App Reactjs</ProjectsH2>
                    <ProjectsP>Build a weather app in react js using Open Weather API. Momentjs, tailwindcss
                    </ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects