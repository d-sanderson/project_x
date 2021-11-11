/** @jsx jsx */
import React from "react"
import { jsx, Flex } from "theme-ui"
import "./RadioNav.css"
import RadioNavButton from "./RadioNavButton"
const RadioNav = ({ handleSetSection, sections }) => {
  let navLinks = sections.map((el, i) => <RadioNavButton key={i} handleSetSection={handleSetSection} title={el} />)
  return (
    <>
      <Flex
        sx={{ justifyContent: "center", alignItems: "center" }}
        className="container"
      >
        <section
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            position: "relative",
          }}
          className="dark"
        >
          {navLinks}
        </section>
      </Flex>

    </>
  )
}

export default RadioNav
