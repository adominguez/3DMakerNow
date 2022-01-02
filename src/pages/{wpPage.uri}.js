import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'
import PrinterPage from '../components/PrinterPageTemplate/PrinterPageTemplate'
import DefatulPage from '../components/DefaultPageTemplate/DefaultPageTemplate'
import IndexPage from './index'

const PageTemplate = ({ data }) => {
  return (
    <Layout>
      {data.wpPage.seo && <Seo seo={data.wpPage.seo} />}
      {data.wpPage.isFrontPage ? <IndexPage data={data} /> :
        data.wpPage?.ACF_Page?.pagetype === 'Impresora' ? (
          <PrinterPage data={data} />
        ) : null
        (data.wpPage?.ACF_Page?.pagetype === 'Default' ||
          !data.wpPage?.ACF_Page?.pagetype) ? <DefatulPage data={data} /> : null
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
      isFrontPage
      status
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
      ACF_Page {
        printername
        pagetype
        aliexpresslink
        amazonlink
        featurestitle
        featurescontent
        technology
        printervolume
        layerresolution
        axisprecision
        extrusornumber
        extrusor
        filamentdiameter
        nozzlediameter
        bedlevel
        printerspeed
        extrusortemperature
        bedtemperature
        materials
        slicer
        inputformat
        firmware
        display
        conectivity
        printersize
        printerweight
        unboxingsize
        unboxingweight
        input
        voltage
        contentprinterlist
        customlinks {
          store
          url
        }
        compareproductstitle
        compareproductscontent
        productstocompare {
          featurestocompare
          link
          name
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300, placeholder: TRACED_SVG)
              }
            }
          }
        }
        productstocompareproperties {
          propertyname
        }
        brand
        content
        fieldGroupName
        printertype
        printervolume
        advantagestitle
        advantagesinitialtext
        advantagesrepeater {
          advantageslist
        }
        disadvantegesrepeater {
          disadvantageslist
        }
        printerimages {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 450, placeholder: TRACED_SVG)
            }
          }
        }
        wherebuytitle
        wherebuycontent
        wherebuyinitialtext
        wherebuyimage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: TRACED_SVG)
            }
          }
        }
        productslisttitle
        productslistinitialtext
        keywordsproductslist
        printersgallerytitle
        printersgalleryinitialtext
        printersgalleryimages {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: TRACED_SVG)
            }
          }
        }
        featurestext
        featurestitle
        features {
          image
          link
          description
        }
        conclusiontitle
        conclusioncontent
        faqstext
        faqstitle
        faqs {
          question
          response
        }
        calltoactiontext
        calltoactionimage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`
