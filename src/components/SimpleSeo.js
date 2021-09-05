/** @jsx jsx */
import { jsx } from "theme-ui"
import Helmet from "react-helmet"
export default function SimpleSeo({ children, siteTitle, description }) {
  return (
    <header>
      <Helmet htmlAttributes={{ lang : 'en' }}>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{siteTitle}</title>
        <link rel="canonical" href="https://davidsanderson.dev" />
      </Helmet>
      {children}
    </header>
  )
}
