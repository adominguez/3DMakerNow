import React from 'react'
import Seo from '../components/Seo/Seo'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import CTAArea from '../components/CTAArea/CTAArea'
import LatestBlogPosts from '../components/LatestBlogPosts/LatestBlogPosts'
import SearcherCombo from '../components/SearcherCombo/SearcherCombo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <SearcherCombo useAsTitle />
      {/* <Hero /> */}
      <CTAArea />
      <LatestBlogPosts />
    </Layout>
  )
}

export default IndexPage
