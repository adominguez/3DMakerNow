import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            title
            childItems {
              nodes {
                label
                title
                url
                parentId
                id
              }
            }
          }
        }
      }
    }
  `)
  return data
}
