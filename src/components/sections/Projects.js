import React from "react"
import Display from "../Display"
import Fade from "react-reveal/Fade"
import ProjectCard from "../ProjectCard"
import { Heading } from "theme-ui"
import { projectsData } from "../../data/projects"

const Projects = () => {
  const projects = projectsData.map((project, i) => {
    return (
      <Fade bottom key={project.id}>
        <ProjectCard
          title={project.title}
          tags={project.tags}
          description={project.description}
          repo={project.repo}
          url={project.url}
        />
      </Fade>
    )
  })
  return (
    <Display>
      <Fade delay={250} top>
        <Heading>Projects</Heading>
      </Fade>
      <div>{projects}</div>
    </Display>
  )
}
export default Projects