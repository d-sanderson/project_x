/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import RetroHitCounter from "react-retro-hit-counter"
export default function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined)
  React.useEffect(() => {
    // Don't count hits on localhost
    // if (process.env.NODE_ENV !== 'production') {
    //   return;
    // }    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(`/.netlify/functions/register-hit?slug=${slug}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        // if (typeof json.hits === "number") {
          setHits(json.hits)
        // }
      })
  }, [slug])
  // if (typeof hits === "undefined") {
  //   return null
  // }
  return (
    <div
      sx={{
        margin: "20px 0",
      }}
    >
      {hits}
      <RetroHitCounter hits={hits} size={20} />
    </div>
  )
}
