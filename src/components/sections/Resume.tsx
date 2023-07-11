import React, { FunctionComponent } from 'react'
import Fade from 'react-reveal/Fade'
import Display from '../Display'
import ResumeLink from '../ResumeLink'
import resume from '../../../static/assets/david_sanderson_resume_071023.pdf'

const Resume: FunctionComponent = () => (
  <Fade top>
    <Display>
      <ResumeLink resume={resume} />
    </Display>
  </Fade>
)
export default Resume
