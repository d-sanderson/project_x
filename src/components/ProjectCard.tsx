import React, { FunctionComponent } from 'react'
import {
  Box, Flex, Button, Badge, Link,
} from 'theme-ui'

interface Props {
  title: string
  description: string
  tags: string[]
  repo: string
  url: string
}

const hoverStyles = {
  backgroundSize: '100% 100%',
  backgroundPosition: '0 100%',
}

const anchorStyles = {
  color: 'inherit',
  textDecoration: 'none',
  backgroundImage: 'linear-gradient(120deg,#f36aff,#f36aff);',
  backgroundSize: '100% 0.1em',
  backgroundPosition: '0 90%',
  backgroundRepeat: 'no-repeat',
  transition: 'background-size 200ms linear',
}

const buttonStyles = {
  ...anchorStyles,
  borderRadius: '20px',
}

const ProjectCard: FunctionComponent<Props> = ({
  title, tags, description, repo, url,
}: Props) => (
  <Box
    sx={{
      border: '2px solid',
      borderColor: 'accent',
      padding: '10px',
      width: '100%',
      margin: '35px 0',
    }}
  >
    <Flex mt={2} sx={{ justifyContent: 'center' }}>
      {tags
          && tags.map((tag, i) => (
            <Badge key={tag} variant="outline" p={1} mx={2}>
              {tag.toLowerCase()}
            </Badge>
          ))}
    </Flex>
    <h3>{title}</h3>
    <Box
      sx={{
        a: {
          ...anchorStyles,
        },
        'a:hover': {
          ...hoverStyles,
        },
      }}
      my={2}
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <Flex sx={{ justifyContent: 'flex-end' }} my={3}>
      {url && (
        <Link target="_blank" rel="noopenner noreferrer" href={url}>
          <Box
            p={1}
            as="a"
            my={2}
            mx={1}
            sx={{
              '&': { ...buttonStyles, backgroundImage: 'linear-gradient(120deg,#43f4ff,#43f4ff)' },
              '&:hover': { ...hoverStyles },
            }}
          >
            See Live
          </Box>
        </Link>
      )}
      {repo && (
        <Link target="_blank" rel="noopenner noreferrer" href={repo}>
          <Box
            p={1}
            my={2}
            mx={1}
            as="a"
            variant="secondary"
            sx={{
              '&': { ...buttonStyles, backgroundImage: 'linear-gradient(120deg,#f36aff,#f36aff)' },
              '&:hover': { ...hoverStyles },
            }}
          >
            View Source
          </Box>
        </Link>
      )}
    </Flex>
  </Box>
)

export default ProjectCard
