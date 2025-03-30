
import "./Project.css"

export interface ProjectProps {
    name: string,
    githubLink?: string,
    toolsUsed: string[]
    writeUpLink?: string
    demoVideoLink?: string
    description: string
}

export const Project = ({
    name,
    githubLink,
    writeUpLink,
    toolsUsed,
    demoVideoLink,
    description
}: ProjectProps) => {
    return <div className={"project-container"}>
        <h2 className={"project-name"}>
            {name}
            { githubLink && <a className={"link"} href={githubLink}> Github </a> }
            { writeUpLink && <a className={"link"} href={writeUpLink}> Writeup </a> } 
            { demoVideoLink && <a className={"link"} href={demoVideoLink}> Demo Video </a> } 
        </h2>
        <div className = {"tools-used"} > 
            { toolsUsed.map((t) => <p className={"tool"}> {t} </p> ) }
        </div>
        <p className={"project-description"}>{description}</p>
    </div>
}