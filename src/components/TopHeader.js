import React from "react"
import { Flex, Box } from "theme-ui"
import Fade from "react-reveal/Fade"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

function TopHeader() {
  const {
    siteMetadata: {
      topHeader: { superTitle, subTitle },
    },
  } = useSiteMetadata()
  return (
    <>
      <Fade top>
        <Flex
          sx={{
            color: "text",
            justifyContent: "center",
            fontSize: ["14px", null, null, "20px"],
            letterSpacing: "2px",
            padding: "20px 0",
            borderBottom: "1px solid",
            borderColor: "text",
            width: ["50%", null, null, "33%"],
            margin: "0 auto",
          }}
        >
          {superTitle}
        </Flex>
      </Fade>
      <Fade bottom>
        <Box
          sx={{
            color: "text",
            textAlign: "center",
            fontSize: "20px",
            margin: "20px 0",
          }}
        >
          {subTitle}
        </Box>
      </Fade>
    </>
  )
}

export default TopHeader
