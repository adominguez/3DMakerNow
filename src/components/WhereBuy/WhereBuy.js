import React from "react"
import CustomSection from "../CustomSection/CustomSection"
import { Image } from './WhereBuy.Styles'
import { colors } from '../../theme/colors'
import ProductAffiliateLinks from '../ProductAffiliateLinks/ProductAffiliateLinks'

const WhereBuy = ({title, content, amazonLink, aliexpressLink, customLinks, initialText, image}) => (
  <CustomSection
    backgroundColor={colors.white}
    titleColor={colors.primary}
    color={colors.blueGray}
  >
    <div className="block">
      {
        title !== 'na' &&
        <h2>{title || 'Dónde comprar'}</h2>
      }
      <div dangerouslySetInnerHTML={{ __html: initialText }} />
      <div className="container">
        <div>
          <Image image={image?.localFile?.childImageSharp?.gatsbyImageData} alt={image.altText || title} />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <ProductAffiliateLinks amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks}  />
        </div>
      </div>
    </div>
  </CustomSection>
)

export default WhereBuy