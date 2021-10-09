import { useStaticQuery, graphql } from "gatsby"

export const useSearcherCombo = () => {
  const data = useStaticQuery(graphql`
    query SearcherComboQuery {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          printerpostproduccion {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: TRACED_SVG)
              }
            }
            altText
          }
          printeraccesories {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: TRACED_SVG)
              }
            },
            altText
          }
          printerfilament {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: TRACED_SVG)
              }
            }
            altText
          }
          printerselection {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: TRACED_SVG)
              }
            }
            altText
          }
          printerresin {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: TRACED_SVG)
              }
            }
            altText
          }
        }
      }
    }
  `)
  return data
}