/** @jsx jsx */
import { jsx } from 'theme-ui'
import Helmet from 'react-helmet'
import { FunctionComponent } from 'react'

interface Props {
  siteTitle: string
  description: string
}
const SimpleSeo: FunctionComponent<Props> = ({ siteTitle, description }) => (
  <header>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{siteTitle}</title>
      <link rel="canonical" href="https://davidsanderson.dev" />
    </Helmet>
  </header>
)

export default SimpleSeo
