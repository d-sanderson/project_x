import React, { FunctionComponent } from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"
import { isBrowser } from "../utils/shared"
import useSound from "use-sound"
import switchOn from "../utils/sounds/switch-on.mp3"


interface Props {
  title: string
  handleSetSection:any
}

const RadioNavButton: FunctionComponent<Props> = ({ title, handleSetSection } : Props) => {
  const [play] = useSound(switchOn)
  const [colorMode, setColorMode] = useColorMode()
  const isColorModeToggle = title == "🌞" || title == "🌕"
  const handleClick = e => {
    if (!isColorModeToggle) {
      handleSetSection(e.target.name)
    }
    if (isColorModeToggle) {
      setColorMode(colorMode === "default" ? "dark" : "default")
    }
  }

  return (
    <label
      onClick={() =>
        isBrowser && !isColorModeToggle ? (window.location.hash = title) : play()
      }
      className={!isColorModeToggle && "hue-rotate "}
      sx={{
        fontWeight: "700",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        margin: "20px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <input
        onClick={handleClick}
        className={title}
        name={title}
        value={title}
        type="radio"
        sx={{
          opacity: "0",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />
      <span
        className="design"
        sx={{
          // values referencing scales defined in a theme
          width: "16px",
          height: "16px",
          border: "1px solid #53B3CB",
          borderRadius: "100%",
          marginRight: "20px",
          position: "relative",
          opacity: "1",
          margin: ["0px 5px", null, "0px 10px", "0px 20px"],

          "::before": {
            display: "block",
            width: "inherit",
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            transformOrigin: "center center",
            transition: ".3s",
          },
          "::after": {
            content: `"${title}"`,
            display: "block",
            width: "inherit",
            color: "text",
            fontSize: ["20px", null, null, "28px"],
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            transform: "scale(.5)",
            transformOrigin: "center center",
            transition: "0.6s",
            bg: `${isColorModeToggle ? "toggleColor" : "#BB99FF"}`,
          },
        }}
      ></span>
      <span className="text"></span>
    </label>
  )
}

export default RadioNavButton
