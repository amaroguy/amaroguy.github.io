import { Project } from "../Project/Project"
import { Projects } from "./Projects"
import "./ProjectsSection.css"

export const ProjectsSection = () => {
    return <div className={"project-experience-section"}>
        <h1> Projects </h1>
        {
            Projects.map(p => <Project {...p}/>)
        }
    </div>
}