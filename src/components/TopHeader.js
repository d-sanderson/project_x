import React from "react"
import { Flex, Box } from "theme-ui"
import Fade from "react-reveal/Fade"

function TopHeader() {
  const containerStyles = {
    color: "text",
    justifyContent: "center",
    fontSize: ["14px", null, null, "20px"],
    letterSpacing: "2px",
    padding: "20px 0",
    borderBottom: "1px solid",
    borderColor: "text",
    width: ["50%", null, null, "33%"],
    margin: "0 auto",
  }
  const titleStyles = {
    color: "text",
    textAlign: "center",
    fontSize: "20px",
    margin: "20px 0",
  }
  return (
    <>
      <Fade top>
        <Flex sx={containerStyles}>David Sanderson</Flex>
      </Fade>
      <Fade bottom>
        <Box sx={titleStyles}>Software Developer</Box>
      </Fade>
    </>
  )
}

export default TopHeader
