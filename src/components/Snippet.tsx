import React, { FunctionComponent, Props } from 'react'
/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { copyToClipboard } from '../utils/shared'

interface Props {
  title: string
  purpose: string
  code: string
  language?: string
}
const Snippet: FunctionComponent<Props> = ({
  language, title, code, purpose,
}: Props) => {
  const handleClick: () => void = () => {
    copyToClipboard(code)
  }

  return (
    <div sx={{ width: '100%' }}>
      <Heading as="h4" mb={2} mt={4}>
        {title}
      </Heading>
      {purpose && <p>{purpose}</p>}
      <pre
        sx={{
          overflowX: 'scroll',
          scrollbarColor: '#53B3CB white',
          scrollbarWidth: 'thin',
        }}
      >
        <button
          type="button"
          sx={{
            position: 'absolute',
            right: '1.25rem',
            top: '.75rem',
            border: '0',
            borderRadius: '3px',
            padding: '0.5em',
            margin: '0.25em',
            opacity: '0.7',
            cursor: 'pointer',
            fontFamily: 'monospace',
            '&:hover': {
              opacity: '1',
            },
          }}
          onClick={handleClick}
        >
          Copy
        </button>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

Snippet.defaultProps = {
  language: '*',
}
export default Snippet
