import React, { FunctionComponent } from 'react'
import Fade from 'react-reveal/Fade'
import { Heading } from 'theme-ui'
import ProjectCard from '../ProjectCard'
import { projectsData } from '../../data/projects'

const Projects: FunctionComponent = () => {
  // const allTags = [...new Set(projectsData.flatMap((el) => el.tags))]
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
    <>
      <Fade delay={250} top>
        <Heading sx={{ textAlign: 'center' }}>Projects</Heading>
      </Fade>
      {/* <div>
        {allTags.map((tag, i) => (
          <Badge key={tag} variant="outline" p={1} mx={2}>
            {tag.toLowerCase()}
          </Badge>
        ))}
      </div> */}
      <div>{projects}</div>
    </>
  )
}
export default Projects
