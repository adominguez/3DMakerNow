import { useStaticQuery, graphql } from "gatsby"

const useLatestBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query latestBlogPostQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            excerpt
            title
            uri
          }
        }
      }
    }
  `)
  return data
}

export default useLatestBlogPosts
