import React from "react"
import Img from "gatsby-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { Wrapper, HeaderWrapper } from "./Hero.styles"

const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()
  const image = data.heroImage.localFile.childImageSharp.fluid
  return (
    <Wrapper>
      <Img fluid={image} />
      <HeaderWrapper>
        <h1>{data.heroText}</h1>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Hero
