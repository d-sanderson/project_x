/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import Display from "../Display"
import Fade from "react-reveal/Fade"

const Blog = ( {content}) => (
  <Display>
    <Fade delay={250} top>
      <Heading>Blog</Heading>
    </Fade>
    <Fade delay={750}>
      <h4 sx={{ textAlign: "center", lineHeight: "170%" }}>
        {content}
      </h4>
    </Fade>
  </Display>
)
export default Blog
