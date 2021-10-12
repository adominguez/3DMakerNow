import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'
import PrinterPage from '../components/PrinterPageTemplate/PrinterPageTemplate'
import DefatulPage from '../components/DefaultPageTemplate/DefaultPageTemplate'

const PageTemplate = ({ data }) => {
  return (
    <Layout>
      {
        data.wpPage.seo && <Seo seo={data.wpPage.seo} />
      }
      {
        data.wpPage.PageTemplate.templateName === 'Printer Template' && <PrinterPage data={data} />
      }
      {
        data.wpPage.PageTemplate.templateName === 'Default' && <DefatulPage data={data} />
      }
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      template {
        templateName
      }
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  uri
                  title
                }
              }
            }
          }
        }
      }
      seo {
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphType
        title
        metaDesc
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          mediaItemUrl
        }
        opengraphImage {
          altText
          mediaItemUrl
        }
        opengraphDescription
        opengraphTitle
        breadcrumbs {
          text
          url
        }
      }
    }
  }
`
