import { useStaticQuery, graphql } from "gatsby"

export const useCTAAreaQuery = () => {
  const data = useStaticQuery(graphql`
    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    query CTAAreaQuery {
      cta: wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          cta3Link
          cta3Text
          cta2Text
          cta2Link
          cta1Text
          cta1Link
          cta1Image {
            altText
            ...ctaImage
          }
          cta2Image {
            altText
            ...ctaImage
          }
          cta3Image {
            altText
            ...ctaImage
          }
        }
      }
    }
  `)
  return data
}
