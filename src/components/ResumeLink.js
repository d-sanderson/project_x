/** @jsx jsx */
import { jsx } from "theme-ui"
import useSound from "use-sound"
import levelUp from "../utils/sounds/level-up.mp3"
const ResumeLink = ({ resume }) => {
  const [play, { stop }] = useSound(levelUp, { volume: .4})
  return (
    <a
      onMouseEnter={play}
      onMouseOut={stop}
      onBlur={stop}
      href={resume}
      target="_blank"
      rel="noreferrer nooppener"
      sx={{
        color: "background",
        backgroundColor: "accent",
        padding: "1em 1.5em",
        margin: "40px 0px",
        position: "relative",
        textDecoration: "none",
        border: "solid 3px",
        textTransform: "uppercase",
        "::before": {
          content: '""',
        },
        ":hover::before": {
          content: '"📝"',
          fontSize: "60px",
          position: "absolute",
          textAlign: "center",
          transition: ".5s",
          top: "-70px",
          left: "20%",
          animation: "floating 2s linear 0ms infinite",
          opacity: "1",
        },
        ":focus::before": {
          content: '"📝"',
          fontSize: "60px",
          position: "absolute",
          textAlign: "center",
          transition: ".5s",
          top: "-70px",
          left: "10%",
          transform: "rotate(360deg)",
          opacity: "1",
        },
        "::active": {
          boxShadow: "none",
          top: "5px",
        },
      }}
    >
      Resume
    </a>
  )
}

export default ResumeLink
