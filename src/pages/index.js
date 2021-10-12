import React from 'react'
import Seo from '../components/Seo/Seo'
import Layout from '../components/Layout/Layout'
import { graphql } from 'gatsby'
import CTAArea from '../components/CTAArea/CTAArea'
import LatestBlogPosts from '../components/LatestBlogPosts/LatestBlogPosts'
import SearcherCombo from '../components/SearcherCombo/SearcherCombo'

const IndexPage = ({ data }) => {
  const { seo } = data.wpPage
  return (
    <Layout>
      <Seo seo={seo} />
      <SearcherCombo useAsTitle />
      <CTAArea />
      <LatestBlogPosts />
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query HomeQuery {
    wpPage(isFrontPage: {eq: true}) {
      seo {
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphType
        title
        metaDesc
        twitterTitle
        twitterDescription
        twitterImage {
          mediaItemUrl
        }
        opengraphImage {
          mediaItemUrl
        }
        opengraphDescription
        opengraphTitle
      }
    }
  }
`
