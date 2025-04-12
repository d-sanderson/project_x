/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import React, { FunctionComponent, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ClientOnly from './ClientOnly'

import SimpleSeo from './SimpleSeo'

interface Props {
  children: ReactNode
  section?: string
}
const Layout: FunctionComponent<Props> = ({ children, section }: Props) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const { title, description } = data.site.siteMetadata
  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr',
        justifyContent: 'center',
        height: '100%',
        fontFamily: 'body',
        flex: '1 0 auto',
        maxWidth: '1200px',

        '@media (min-width: 768px)': {
          gridTemplateColumns: '1fr 1fr 1fr',

        },
      }}
    >
      <SimpleSeo siteTitle={title} description={description} />
      <ClientOnly>
        <main>{children}</main>
      </ClientOnly>
    </Container>
  )
}

Layout.defaultProps = {
  section: '',
}

export default Layout
