import React, { FunctionComponent } from 'react'
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import './RadioNav.css'
import RadioNavButton from './RadioNavButton'

interface Props {
  sections: string[]
  handleSetSection: any
}
const RadioNav: FunctionComponent<Props> = ({ handleSetSection, sections }: Props) => {
  const navLinks = sections.map((el) => <RadioNavButton key={el} handleSetSection={handleSetSection} title={el} />)
  return (
    <Flex
      sx={{ justifyContent: 'center', alignItems: 'center' }}
      className="container"
    >
      <section
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          position: 'relative',
        }}
        className="dark"
      >
        {navLinks}
      </section>
    </Flex>
  )
}

export default RadioNav
