import React from "react"
import { Box, Flex, Button } from "theme-ui"
const ProjectCard = ({ title, tags, description, repo, url }) => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "2px solid white",
        padding: "10px",
        margin: "20px 0",
      }}
    >
      <Flex mt={2} sx={{ justifyContent: "center" }}>
        {tags &&
          tags.map(el => (
            <Button p={1} variant="secondary" mx={2}>
              {el.toLowerCase()}
            </Button>
          ))}
      </Flex>
      <h4>{title}</h4>
      <p>{description}</p>
      <Flex sx={{ justifyContent: "flex-end" }}>
        {url && (
          <Button p={1} my={2} mx={1}>
            See Live
          </Button>
        )}
        {repo && (
          <Button p={1} my={2} mx={1} variant="secondary">
            View Source
          </Button>
        )}
      </Flex>
    </Box>
  )
}

export default ProjectCard
