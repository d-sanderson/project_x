/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { FunctionComponent, useEffect } from 'react'
import RetroHitCounter from 'react-retro-hit-counter'

interface Props {
  slug: string
}
const HitCounter: FunctionComponent<Props> = ({ slug }: Props) => {
  const [hits, setHits] = React.useState(undefined)
  useEffect(() => {
    // Don't count hits on localhost
    // if (process.env.NODE_ENV !== 'production') {
    //   return;
    // }    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(`/.netlify/functions/register-hit?slug=${slug}`)
      .then((res) => res.json())
      .then((json) => {
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
        margin: '20px 0',
      }}
    >
      {hits}
      <RetroHitCounter hits={hits} size={20} />
    </div>
  )
}

export default HitCounter
