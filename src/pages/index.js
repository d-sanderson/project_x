import React, { useState, useEffect } from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, Box } from "theme-ui"
import Fade from "react-reveal/Fade"
import { useColorMode } from "theme-ui"
import { isBrowser } from "../utils/shared"
import Layout from "../components/Layout"
import RadioNav from "../components/RadioNav"
import RadioNavButton from "../components/RadioNavButton"
import { Blog, About, Resume, Projects, Snippets } from "../components/sections"

const IndexPage = () => {
  const [colorMode] = useColorMode()

  const [components] = useState({
    about: (
      <About
        title="Hi I am David Sanderson!"
        content="I am a software developer from Albuquerque, New Mexico. I enjoy music, design, and engineering creative solutions to interesting problems."
      />
    ),
    projects: <Projects />,
    // blog: <Blog />, // TODO: add this back?
    // snippets: <Snippets />,
    resume: <Resume />,
  })
  const handleSetSection = title => {
    setSection(title)
  }

  useEffect(() => {
    const page = isBrowser && window.location.hash.replace("#", "")
    const btn =
      window?.document?.querySelector(`.${section}`) ?? window?.document?.body
    btn.focus()
    setSection(page || "about")
    return () => {}
  }, [handleSetSection])
  const [section, setSection] = useState()

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
    <Layout section={section}>
      <Flex
        mr={[null, null, null, "350px"]}
        sx={{ justifyContent: "flex-end" }}
      >
        <RadioNavButton title={colorMode === "default" ? "🌞" : "🌕"} />
      </Flex>
      <Fade top>
        <Flex sx={containerStyles}>David Sanderson</Flex>
      </Fade>
      <Fade bottom>
        <Box sx={titleStyles}>Software Developer</Box>
      </Fade>
      <RadioNav
        handleSetSection={handleSetSection}
        sections={Object.keys(components)}
      />
      {components[section]}
    </Layout>
  )
}

export default IndexPage
