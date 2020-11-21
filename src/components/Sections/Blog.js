import React from "react"
/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import Display from "../Display"
import Fade from "react-reveal/Fade"

const Blog = () => (
  <Display>
    <Fade delay={250} top>
      <Heading>Blog</Heading>
    </Fade>
    <Fade delay={750}>
      <h4 sx={{ textAlign: "center", lineHeight: "170%" }}>
        Thanks for stopping by! I'm working on my first blog post, come check it
        out later!
      </h4>
    </Fade>
  </Display>
)
export default Blog