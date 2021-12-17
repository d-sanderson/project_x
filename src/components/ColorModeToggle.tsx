import React, { FunctionComponent } from 'react'
import { Flex, useColorMode } from 'theme-ui'
import RadioNavButton from './RadioNavButton'

const ColorModeToggle: FunctionComponent = () => {
  const [colorMode] = useColorMode()
  return (
    <Flex mr={[null, null, null, '350px']} sx={{ justifyContent: 'flex-end' }}>
      <RadioNavButton isToggle title="" />
    </Flex>
  )
}

export default ColorModeToggle
