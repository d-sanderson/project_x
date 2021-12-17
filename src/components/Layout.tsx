/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import React, { FunctionComponent, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import ClientOnly from './ClientOnly'

import SimpleSeo from './SimpleSeo'
import Footer from './Footer'

interface Props {
  children: ReactNode
  section: any
}
const Layout: FunctionComponent<Props> = ({ children, section }: Props) => {
  const data = useStaticQuery(graphql`
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
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        fontFamily: 'body',
        flex: '1 0 auto',
        maxWidth: '1200px',
      }}
    >
      <SimpleSeo siteTitle={title} description={description} />
      <ClientOnly>
        <main sx={{ flex: '1 0 auto' }}>{children}</main>
        <Footer section={section} />
      </ClientOnly>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout