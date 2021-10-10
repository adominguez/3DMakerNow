import React from 'react'
import { Link } from 'gatsby'
import useLatestBlogPosts from '../../hooks/useLatestBlogPosts'
import { Wrapper } from './LatestBlogPosts.styles'
import Parser from 'html-react-parser'

const LatestBlogPosts = props => {
  const data = useLatestBlogPosts()
  return (
    <Wrapper>
      <h2>Latest Blog Posts</h2>
      <h3>{data.allWpPost.edges[0].node.title}</h3>
      <div>
        {Parser(data.allWpPost.edges[0].node.excerpt)}
        <Link to={data.allWpPost.edges[0].node.uri}>Read More</Link>
      </div>
    </Wrapper>
  )
}

export default LatestBlogPosts
