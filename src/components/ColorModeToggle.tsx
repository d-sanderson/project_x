import React, { FunctionComponent } from 'react'
import { Flex } from 'theme-ui'
import RadioNavButton from './RadioNavButton'

const ColorModeToggle: FunctionComponent = () => (
  <Flex sx={{ justifyContent: 'flex-end' }}>
    <RadioNavButton isToggle title="" />
  </Flex>
)

export default ColorModeToggle
