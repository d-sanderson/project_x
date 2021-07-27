import React from "react"
import { Box, Flex, Button, Badge, Link } from "theme-ui"
const ProjectCard = ({ title, tags, description, repo, url }) => {
  return (
    <Box
      sx={{
        border: "2px solid",
        borderColor: "accent",
        padding: "10px",
        width: "100%",
        margin: "35px 0",
      }}
    >
      <Flex mt={2} sx={{ justifyContent: "center" }}>
        {tags &&
          tags.map((el, i) => (
            <Badge key={i} variant="outline" p={1} mx={2}>
              {el.toLowerCase()}
            </Badge>
          ))}
      </Flex>
      <h3>{title}</h3>
      <p>{description}</p>
      <Flex sx={{ justifyContent: "flex-end" }}>
        {url && (
          <Link target="_blank" rel="noopenner noreferrer" href={url}>
            <Button p={1} as="a" my={2} mx={1}>
              See Live
            </Button>
          </Link>
        )}
        {repo && (
          <Link target="_blank" rel="noopenner noreferrer" href={repo}>
            <Button p={1} my={2} mx={1} as="a" variant="secondary">
              View Source
            </Button>
          </Link>
        )}
      </Flex>
    </Box>
  )
}

export default ProjectCard
