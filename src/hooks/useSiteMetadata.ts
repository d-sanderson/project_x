import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = (): GatsbyTypes.siteMetaDataQuery['site'] => {
  const { site } = useStaticQuery<GatsbyTypes.siteMetaDataQuery>(
    graphql`
    query siteMetaData {
      site {
        siteMetadata {
          title
          description
          author
          topHeader { 
            superTitle
            subTitle
          }
          about {
            title
            content
          }
        }
      }
    }
  `,
  )
  return site
}
