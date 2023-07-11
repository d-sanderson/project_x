import React, { FunctionComponent } from 'react'
/** @jsx jsx */
import { jsx, Heading, Box } from 'theme-ui'
import Jump from 'react-reveal/Jump'
import Swing from 'react-reveal/Swing'
import Fade from 'react-reveal/Fade'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

const About: FunctionComponent = () => {
  const { siteMetadata: { about: { title, content } } } = useSiteMetadata()
  return (
    <Fade bottom>
      <Box
        mx={3}
        my={4}
      >
        <Jump delay={500}>
          <Swing delay={350}>
            <Heading as="h1">{title}</Heading>
          </Swing>
        </Jump>
        <p sx={{ lineHeight: 'body' }}>{content}</p>
      </Box>
      {/* </> */}
    </Fade>
  )
}
export default About
