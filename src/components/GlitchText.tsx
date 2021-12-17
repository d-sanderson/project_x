/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const GlitchText: FunctionComponent<Props> = ({ children }: Props) => (
  <div
    sx={{
      position: 'relative',
      '&:hover': {
        '&:before': {
          content: ' ',
          position: 'absolute',
          top: '0',
          width: '100%',
          height: '100%',
          left: '2px',
          textShadow: '-1px 0 #de3c4b',
          background: '#121212',
          overflow: 'hidden',
          animation: 'noise-anim-2 5s infinite linear alternate-reverse',
        },
        '&:after': {
          content: 'attr(data-text)',
          position: 'absolute',
          top: '0',
          width: '100%',
          height: '100%',
          left: '-2px',
          textShadow: '-1px 0 #de3c4b',
          background: '#121212',
          overflow: 'hidden',
          animation: 'noise-anim 2s infinite linear alternate-reverse',
        },
        '@keyframes noise-anim': {
          '0%': {
            clipPath: 'inset(100% 0 1% 0)',
          },
          '5%': {
            clipPath: 'inset(45% 0 41% 0)',
          },
          '10%': {
            clipPath: 'inset(8% 0 18% 0)',
          },
          '15%': {
            clipPath: 'inset(94% 0 7% 0)',
          },
          '20%': {
            clipPath: 'inset(23% 0 69% 0)',
          },
          '25%': {
            clipPath: 'inset(21% 0 28% 0)',
          },
          '30%': {
            clipPath: 'inset(92% 0 3% 0)',
          },
          '35%': {
            clipPath: 'inset(2% 0 35% 0)',
          },
          '40%': {
            clipPath: 'inset(80% 0 1% 0)',
          },
          '45%': {
            clipPath: 'inset(75% 0 9% 0)',
          },
          '50%': {
            clipPath: 'inset(37% 0 3% 0)',
          },
          '55%': {
            clipPath: 'inset(59% 0 3% 0)',
          },
          '60%': {
            clipPath: 'inset(26% 0 67% 0)',
          },
          '65%': {
            clipPath: 'inset(75% 0 19% 0)',
          },
          '70%': {
            clipPath: 'inset(84% 0 2% 0)',
          },
          '75%': {
            clipPath: 'inset(92% 0 6% 0)',
          },
          '80%': {
            clipPath: 'inset(10% 0 58% 0)',
          },
          '85%': {
            clipPath: 'inset(58% 0 23% 0)',
          },
          '90%': {
            clipPath: 'inset(20% 0 59% 0)',
          },
          '95%': {
            clipPath: 'inset(50% 0 32% 0)',
          },
          '100%': {
            clipPath: 'inset(69% 0 9% 0)',
          },
        },
      },
    }}
    data-text={children}
  >
    {children}
  </div>
)

export default GlitchText
