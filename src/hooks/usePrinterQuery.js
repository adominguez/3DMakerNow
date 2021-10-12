import { useStaticQuery, graphql } from 'gatsby'

export const usePrinterQuery = () => {
  const data = useStaticQuery(graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
    }
  }
`)
  return data
}
