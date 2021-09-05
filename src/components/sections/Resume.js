import React from "react"
import Display from "../Display"
import Fade from "react-reveal/Fade"
import ResumeLink from "../ResumeLink"
import resume from "../../../static/assets/david_sanderson_resume_050121.pdf"

const Resume = () => (
  <Fade top>
    <Display>
      <ResumeLink resume={resume} />
    </Display>
  </Fade>
)
export default Resume
