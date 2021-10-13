import React from 'react'
import { Section } from './ProductDetail.Styles'
import { colors } from '../../theme/colors'
import ImageGalery from '../ImageGalery/ImageGalery'
import ProductAffiliateLinks from '../ProductAffiliateLinks/ProductAffiliateLinks'

const ProductDetailValoration = ({
  pageTitle,
  content,
  images,
  amazonLink,
  aliexpressLink,
  customLinks,
}) => {
  return (
    <Section backgroundColor={colors.blueGrayLight} titleColor={colors.primary}>
      <div className="container">
        {images?.length > 0 && (
          <div className="column">
            <ImageGalery images={images} />
          </div>
        )}
        <div className="column">
          <h1 dangerouslySetInnerHTML={{ __html: pageTitle }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <ProductAffiliateLinks
            amazonLink={amazonLink}
            aliexpressLink={aliexpressLink}
            customLinks={customLinks}
          />
        </div>
      </div>
    </Section>
  )
}

export default ProductDetailValoration
