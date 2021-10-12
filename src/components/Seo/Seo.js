/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function Seo({ seo, lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const {
    metaRobotsNoindex,
    metaRobotsNofollow,
    opengraphType,
    title,
    metaDesc,
    opengraphDescription,
    opengraphTitle,
    twitterTitle,
    twitterDescription,
    twitterImage,
    opengraphImage
  } = seo || {}

  const getMetarobotsData = () => {
    if (metaRobotsNoindex && metaRobotsNofollow) {
      return `${metaRobotsNoindex}, ${metaRobotsNofollow}`
    }
    if (metaRobotsNoindex) {
      return metaRobotsNoindex
    }
    if (metaRobotsNofollow) {
      return metaRobotsNofollow
    }
    return undefined
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDesc || site.siteMetadata.description,
        },
        {
          name: `robots`,
          content: `${getMetarobotsData() || 'index, follow' }`,
        },
        {
          property: `og:title`,
          content: opengraphTitle || site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: opengraphDescription || site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: opengraphType || `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: '@3DMakerNow',
        },
        {
          name: `twitter:creator`,
          content: '@3DMakerNow',
        },
        {
          name: `twitter:title`,
          content: twitterTitle || site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: twitterDescription || site.siteMetadata.description,
        },
        {
          name: `twitter:image`,
          content: twitterImage?.mediaItemUrl || opengraphImage?.mediaItemUrl,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `es`,
  seo: {},
  meta: []
}

Seo.propTypes = {
  lang: PropTypes.string,
  seo: PropTypes.object.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object)
}

export default Seo
