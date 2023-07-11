import React, { FunctionComponent } from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

interface Props {
  resume: string
}
const ResumeLink: FunctionComponent<Props> = ({ resume }: Props) => (
  <a
    href={resume}
    target="_blank"
    rel="noreferrer"
    sx={{
      color: 'background',
      backgroundColor: 'accent',
      padding: '1em 1.5em',
      margin: '0 auto',
      display: 'inline-block',
      textDecoration: 'none',
      border: 'solid 3px',
      textTransform: 'uppercase',
      transition: 'all 0.25s ease-out',
      '::before': {
        content: '""',
      },
      ':hover': {
        top: '-3px',
        position: 'relative',
        boxShadow: '-6px 14px 12px 2px rgba(90, 90, 90, .22)',
      },
    }}
  >
    Resume
  </a>
)

export default ResumeLink
