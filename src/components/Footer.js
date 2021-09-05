/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Link, Box } from "theme-ui"
import Fade from "react-reveal/Fade"
import useSound from "use-sound"
import heartBeat from "../utils/sounds/heartbeat.mp3"
// Todo: bring back hit counter?
// import Wobble from "react-reveal/Wobble"
// import HitCounter from "./HitCounter"

const Footer = ({ section }) => {
  const [slug, setSlug] = useState("/")
  const [play, { stop }] = useSound(heartBeat, { volume: 0.2 })

  return (
    <footer
      sx={{
        fontSize: ["8px", null, null, "14px"],
        flexShrink: 0,
        margin: "0 auto",
        textAlign: "center",
        width: ["100%", null, null, "37%"],
      }}
    >
      <Fade big delay={2000}>
        <Box>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link
            variant="primary"
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noreferrer noopenner"
          >
            Gatsby
          </Link>
          ,{" "}
          <Link
            variant="primary"
            href="https://www.netlify.com/"
            target="_blank"
            rel="noreferrer noopenner"
          >
            Netlify
          </Link>
          , &{" "}
          <Link
            variant="primary"
            href="https://theme-ui.com/"
            target="_blank"
            rel="noreferrer noopenner"
          >
            Theme-ui
          </Link>
        </Box>
      </Fade>
      <Fade big delay={2500}>
        <Box mt={4}>
          Developed with{" "}
          <span
            role="img"
            aria-label="heart-emoji"
            onMouseOver={play}
            onMouseOut={stop}
          >
            💖
          </span>{" "}
          by{" "}
          <Link
            sx={{ color: "#00ACEE", fontSize: "10px" }}
            href="https://twitter.com/_dsanderson"
            target="_blank"
            rel="noreferrer noopenner"
          >
            @_dsanderson
          </Link>
        </Box>
      </Fade>
      <Fade delay={3000}>
        {/* <HitCounter slug={section} /> */}
      </Fade>
    </footer>
  )
}

export default Footer
