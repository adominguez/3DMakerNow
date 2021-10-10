import { useStaticQuery, graphql } from "gatsby"

export const useSearcherCombo = () => {
  const data = useStaticQuery(graphql`
    query SearcherComboQuery {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          printerpostproduccion {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: NONE)
              }
            }
            altText
          }
          printeraccesories {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: NONE)
              }
            },
            altText
          }
          printerfilament {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: NONE)
              }
            }
            altText
          }
          printerselection {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: NONE)
              }
            }
            altText
          }
          printerresin {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 450, placeholder: NONE)
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