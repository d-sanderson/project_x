import React, { useState, useEffect } from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "theme-ui"
import { useColorMode } from "theme-ui"
import { isBrowser } from "../utils/shared"
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import Layout from "../components/Layout"
import RadioNav from "../components/RadioNav"
import RadioNavButton from "../components/RadioNavButton"
import TopHeader from "../components/TopHeader"
import {
  About,
  Resume,
  Projects,
  // Blog,
  // Snippets
} from "../components/sections"
const IndexPage = () => {

  const { siteMetadata: { content: { mainTitle, about } } } = useSiteMetadata()
  const [colorMode] = useColorMode()
  const [components] = useState({
    about: (
      <About
        title={mainTitle}
        content={about}
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

  return (
    <Layout section={section}>
      <Flex
        mr={[null, null, null, "350px"]}
        sx={{ justifyContent: "flex-end" }}
      >
        <RadioNavButton title={colorMode === "default" ? "🌞" : "🌕"} />
      </Flex>
      <TopHeader />
      <RadioNav
        handleSetSection={handleSetSection}
        sections={Object.keys(components)}
      />
      {components[section]}
    </Layout>
  )
}

export default IndexPage
