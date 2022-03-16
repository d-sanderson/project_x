import React, { FunctionComponent } from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { isBrowser } from '../utils/shared'

interface Props {
  title: string
  handleSetSection?:any
  isToggle?: boolean
}

const RadioNavButton: FunctionComponent<Props> = ({ title, handleSetSection, isToggle } : Props) => {
  const [colorMode, setColorMode] = useColorMode()
  const handleClick = (e) => {
    if (!isToggle) {
      handleSetSection(e.target.name)
    }
    if (isToggle) {
      setColorMode(colorMode === 'default' ? 'dark' : 'default')
    }
  }
  return (
    <label
      onClick={() => (isBrowser && !isToggle && (window.location.hash = title))}
      className={!isToggle && 'hue-rotate '}
      title={title}
      sx={{
        fontWeight: '700',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'nowrap',
        margin: '20px',
        cursor: 'pointer',
        position: 'relative',
        border: '0',
        padding: '0',
        fontFamily: 'inherit',
        backgroundColor: 'inherit',
      }}
    >
      <input
        onClick={handleClick}
        className={title}
        name={title}
        value={title}
        type="radio"
        sx={{
          opacity: '0',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1',
        }}
      />
      <span
        className="design"
        sx={{
          // values referencing scales defined in a theme
          width: '16px',
          height: '16px',
          border: '1px solid #53B3CB',
          borderRadius: '100%',
          marginRight: '20px',
          position: 'relative',
          opacity: '1',
          margin: ['0px 5px', null, '0px 10px', '0px 20px'],

          '::before': {
            display: 'block',
            width: 'inherit',
            height: 'inherit',
            borderRadius: 'inherit',
            position: 'absolute',
            transformOrigin: 'center center',
            transition: '.3s',
          },
          '::after': {
            content: `"${title}"`,
            display: 'block',
            width: 'inherit',
            color: 'text',
            fontSize: ['20px', null, null, '28px'],
            height: 'inherit',
            borderRadius: 'inherit',
            position: 'absolute',
            transform: 'scale(.5)',
            transformOrigin: 'center center',
            transition: '0.6s',
            bg: `${isToggle ? 'toggleColor' : '#BB99FF'}`,
          },
        }}
      />
      <span className="text" />
    </label>
  )
}

RadioNavButton.defaultProps = {
  isToggle: false,
}

export default RadioNavButton
