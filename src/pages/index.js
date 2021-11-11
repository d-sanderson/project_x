/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect, useCallback } from "react"
import { isBrowser } from "../utils/shared"
import Layout from "../components/Layout"
import RadioNav from "../components/RadioNav"
import TopHeader from "../components/TopHeader"
import {
  About,
  Resume,
  Projects,
  // Blog,
  // Snippets
} from "../components/sections"
import ColorModeToggle from "../components/ColorModeToggle"

const IndexPage = () => {
  const [components] = useState({
    about: <About />,
    projects: <Projects />,
    resume: <Resume />,
    // blog: <Blog />, // TODO: add this back?
    // snippets: <Snippets />,
  })
  const [section, setSection] = useState()
  const handleSetSection = useCallback(
    title => {
      setSection(title)
    },
    [setSection]
  )

  useEffect(() => {
    const page = isBrowser && window.location.hash.replace("#", "")
    const btn =
      window?.document?.querySelector(`.${section}`) ?? window?.document?.body
    btn.focus()
    setSection(page || "about")
    return () => {}
  }, [handleSetSection, section])

  return (
    <Layout section={section}>
      <ColorModeToggle />
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
