import React from 'react'
import { graphql } from 'gatsby'
import CTAArea from '../components/CTAArea/CTAArea'
import LatestBlogPosts from '../components/LatestBlogPosts/LatestBlogPosts'
import SearcherCombo from '../components/SearcherCombo/SearcherCombo'

const IndexPage = ({ data }) => {
  return (
    <>
      <SearcherCombo useAsTitle />
      <CTAArea />
    </>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query HomeQuery {
    wpPage(isFrontPage: { eq: true }) {
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
