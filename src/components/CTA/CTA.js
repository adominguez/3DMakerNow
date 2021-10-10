import React from 'react'
import { Link } from 'gatsby'
import {
  StyledImg,
  CTAImage,
  CTAImageTextWrapper,
  CTAImageText,
} from './CTA.styles'

const CTA = ({ img, link, text }) => {
  return (
    <CTAImage>
      <StyledImg image={img} alt="CTA image" />
      <Link to={link}>
        <CTAImageTextWrapper>
          <CTAImageText>{text}</CTAImageText>
        </CTAImageTextWrapper>
      </Link>
    </CTAImage>
  )
}

export default CTA
