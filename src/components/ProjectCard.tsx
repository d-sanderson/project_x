import React, { FunctionComponent } from 'react'
import {
  Box, Flex, Button, Badge, Link,
  useColorMode,
} from 'theme-ui'

interface Props {
  title: string
  description?: string
  tags?: string[]
  repo?: string
  url?: string
}

const hoverStyles = {
  backgroundSize: '100% 100%',
  backgroundPosition: '0 100%',
}

const ProjectCard: FunctionComponent<Props> = ({
  title, tags, description, repo, url,
}: Props) => {
  const [colorMode] = useColorMode()

  const anchorStyles = {
    color: colorMode === 'default' ? 'white' : 'black',
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

  return (
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
          && tags.map((tag) => (
            <Badge key={tag} variant="outline" p={1} mx={2}>
              {tag.toLowerCase()}
            </Badge>
          ))}
      </Flex>
      <h3>{title}</h3>
      {description && (
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
      )}
      <Flex sx={{ justifyContent: 'flex-end' }} my={3}>
        {url && (
          <Link target="_blank" rel="noopenner noreferrer" href={url}>
            <Button
              p={1}
              as="a"
              my={2}
              mx={1}
              sx={{
                all: 'unset',
                '&': { ...buttonStyles, backgroundImage: 'linear-gradient(120deg,#43f4ff,#43f4ff)' },
                '&:hover': { ...hoverStyles },
              }}
            >
              See Live
            </Button>
          </Link>
        )}
        {repo && (
          <Link target="_blank" rel="noopenner noreferrer" href={repo}>
            <Button
              p={1}
              my={2}
              mx={1}
              as="a"
              variant="secondary"
              sx={{
                all: 'unset',
                '&': { ...buttonStyles, backgroundImage: 'linear-gradient(120deg,#f36aff,#f36aff)' },
                '&:hover': { ...hoverStyles },
              }}
            >
              View Source
            </Button>
          </Link>
        )}
      </Flex>
    </Box>
  )
}

ProjectCard.defaultProps = {
  description: '',
  repo: undefined,
  url: undefined,
  tags: undefined,
}

export default ProjectCard
