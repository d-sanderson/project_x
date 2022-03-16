/** @jsx jsx */
import {
  jsx, Flex, Button, Heading,
} from 'theme-ui'
import React, { FunctionComponent, useEffect } from 'react'
import Prism from 'prismjs'
import Fade from 'react-reveal/Fade'
import Display from '../Display'
import { jsSnippets, cssSnippets, htmlSnippets } from '../../data/snippets'
import Snippet from '../Snippet'

const Snippets: FunctionComponent = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])
  const handleClick = (e: React.MouseEvent): void => {
    document.getElementById(e.target.name).scrollIntoView({ behavior: 'smooth' })
  }
  const js = jsSnippets.map((el) => (
    <Snippet
      key={el.id}
      title={el.title}
      language="javascript"
      code={el.code}
      purpose={el.purpose}
    />
  ))
  const css = cssSnippets.map((el) => (
    <Snippet
      key={el.id}
      title={el.title}
      language="css"
      code={el.code}
      purpose={el.purpose}
    />
  ))
  const html = htmlSnippets.map((el) => (
    <Snippet
      key={el.id}
      title={el.title}
      language="html"
      code={el.code}
      purpose={el.purpose}
    />
  ))

  return (
    <Display>
      <Fade top>
        <Heading>Snippets</Heading>
      </Fade>
      <Fade delay={500}>
        <h4 sx={{ textAlign: 'center' }}>
          A vault for frequently used code that I often forget or google.
          {' '}
          <span>😬</span>
        </h4>
      </Fade>
      <Flex my={4}>
        <Fade delay={1000}>
          <Button
            mx={2}
            as="a"
            variant="secondary"
            name="html"
            onClick={handleClick}
          >
            HTML
          </Button>
        </Fade>
        <Fade delay={1500}>
          <Button as="a" mx={2} name="css" onClick={handleClick}>
            CSS
          </Button>
        </Fade>
        <Fade delay={2000}>
          <Button
            mx={2}
            as="a"
            name="js"
            variant="secondary"
            onClick={handleClick}
          >
            JS
          </Button>
        </Fade>
      </Flex>

      <div sx={{ width: '100%' }}>
        <Fade bottom delay={2200}>
          <Heading mt={4} id="html">
            HTML
          </Heading>
        </Fade>
        {html}
        <Heading mt={4} id="css">
          CSS
        </Heading>
        {css}
        <Heading mt={4} id="js">
          JavaScript
        </Heading>
        {js}
      </div>
    </Display>
  )
}
export default Snippets
