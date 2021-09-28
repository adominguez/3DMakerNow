import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { CTAImage, CTAImageTextWrapper, CTAImageText } from './CTA.styles'

const CTA = ({img, link, text}) => {
    return (
        <CTAImage>
            <Img fluid={img} />
            <Link to={link}>
                <CTAImageTextWrapper>
                    <CTAImageText>{text}</CTAImageText>
                </CTAImageTextWrapper>
            </Link>
        </CTAImage>
    )
}

export default CTA