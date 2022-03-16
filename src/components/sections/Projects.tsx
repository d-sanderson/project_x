import React, { FunctionComponent } from 'react'
import Fade from 'react-reveal/Fade'
import { Heading } from 'theme-ui'
import Display from '../Display'
import ProjectCard from '../ProjectCard'
import { projectsData } from '../../data/projects'

const Projects: FunctionComponent = () => {
  const projects = projectsData.map((project) => (
    <Fade bottom key={project.id}>
      <ProjectCard
        title={project.title}
        tags={project.tags}
        description={project.description}
        repo={project.repo}
        url={project.url}
      />
    </Fade>
  ))
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
