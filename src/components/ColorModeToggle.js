import React from "react"
import { Flex } from "theme-ui"
import { useColorMode } from "theme-ui"
import RadioNavButton from "./RadioNavButton"
function ColorModeToggle() {
  const [colorMode] = useColorMode()
  return (
    <Flex mr={[null, null, null, "350px"]} sx={{ justifyContent: "flex-end" }}>
      <RadioNavButton title={colorMode === "default" ? "🌞" : "🌕"} />
    </Flex>
  )
}

export default ColorModeToggle
