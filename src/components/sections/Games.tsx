import React, { FunctionComponent } from 'react'
import Fade from 'react-reveal/Fade'
import { Heading } from 'theme-ui'
import ProjectCard from '../ProjectCard'
import { gamesData } from '../../data/games'

const Games: FunctionComponent = () => {
  const games = gamesData.map((project) => (
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
        <Heading sx={{ textAlign: 'center' }}>Games</Heading>
      </Fade>
      <div>{games}</div>
    </>
  )
}
export default Games
