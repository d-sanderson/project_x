import React, { FunctionComponent } from 'react'
import Fade from 'react-reveal/Fade'
import { Flex } from 'theme-ui'
import ResumeLink from '../ResumeLink'
import resume from '../../../static/assets/david_sanderson_resume_071023.pdf'

const Resume: FunctionComponent = () => (
  <Fade top>
    <Flex
      my={5}
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: ['18px', null, null, '20px'],
        fontWeight: '700',
      }}
    >
      <ResumeLink resume={resume} />
    </Flex>
  </Fade>
)
export default Resume
