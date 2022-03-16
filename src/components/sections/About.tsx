import React, { FunctionComponent } from 'react'
/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import Jump from 'react-reveal/Jump'
import Swing from 'react-reveal/Swing'
import Fade from 'react-reveal/Fade'
import Display from '../Display'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

const About: FunctionComponent = () => {
  const { siteMetadata: { about: { title, content } } } = useSiteMetadata()
  return (
    <Fade bottom>
      <Display>
        <div sx={{ margin: [null, null, null, '0 40px'] }}>
          <Jump delay={500}>
            <Swing delay={350}>
              <Heading as="h1">{title}</Heading>
            </Swing>
          </Jump>
          <p sx={{ lineHeight: 'body' }}>{content}</p>
        </div>
      </Display>
    </Fade>
  )
}
export default About
