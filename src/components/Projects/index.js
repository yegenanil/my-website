import berlin from "../../images/berlin.png";
import icon1 from "../../images/icon1.svg";
import pxtoremimg from "../../images/pxtoremImg.png";
import { ProjectCard, ProjectContainer, ProjectH1, ProjectH2, ProjectIcon, ProjectP, ProjectWrapper } from "./ProjectElements";


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
                <ProjectCard href="https://weatherygn.netlify.app/" target="_blank">
                    <ProjectIcon src={berlin} />
                    <ProjectH2>Weather App Reactjs</ProjectH2>
                    <ProjectP>A weather app in Reactjs using Open Weather API, Momentjs, Tailwind CSS
                    </ProjectP>
                </ProjectCard>
                <ProjectCard href="https://pxtorem-calc.netlify.app/" target="_blank">
                    <ProjectIcon src={pxtoremimg} />
                    <ProjectH2>PX to Rem Calculator</ProjectH2>
                    <ProjectP>This calculator converts pixels to the CSS unit REM. The conversion is based on the default font size of 16 pixel
                    </ProjectP>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects