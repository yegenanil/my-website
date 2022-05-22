import { ProjectCard, ProjectContainer, ProjectH1, ProjectH2, ProjectIcon, ProjectP, ProjectWrapper } from "./ProjectElements"
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import berlin from "../../images/berlin.png";


const Projects = () => {
    return (
        <ProjectContainer>
            <ProjectH1>My Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectCard href="https://github.com/yegenanil?tab=repositories" target="_blank">
                    <ProjectIcon src={icon1} />
                    <ProjectH2>Custom design to React </ProjectH2>
                    <ProjectP>I converted Figma, Sketch, Adobe XD etc. designs to React components
                    </ProjectP>
                </ProjectCard>
                {/* <ProjectCard>
                    <ProjectIcon src={icon2} />
                    <ProjectH2>Freelance</ProjectH2>
                    <ProjectP>I have developed a clinic app with React, React Router, Redux, and ChakraUI
                    </ProjectP>
                </ProjectCard> */}
                <ProjectCard href="https://weatherygn.netlify.app/" target="_blank">
                    <ProjectIcon src={berlin} />
                    <ProjectH2>Weather App Reactjs</ProjectH2>
                    <ProjectP>a weather app in Reactjs using Open Weather API, Momentjs, Tailwind CSS
                    </ProjectP>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects