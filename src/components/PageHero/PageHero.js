import React from "react"
import Img from "gatsby-image"

const PageHero = ({ img, alt }) => (
  <Img fluid={img} style={{ maxHeight: "250px" }} alt={alt} />
)

export default PageHero
