import PropTypes from 'prop-types'
import React from 'react'
import ProductsStars from './ProductsStars'
import { Price } from './ProductsList.styles'

const ProductActionPrice = ({
  product,
  hideAmazonRatings,
  hideAmazonRate,
}) => {
  return (
    <Price>
        <span>
          {product?.Price.replace('.', ',')}
        </span>
        <ProductsStars
          hideAmazonRatings={hideAmazonRatings}
          hideAmazonRate={hideAmazonRate}
          amazonRate={product.Rating}
          amazonRatings={product.TotalReviews}
        />
    </Price>
  )
}

ProductActionPrice.propTypes = {
  product: PropTypes.object,
  hideAmazonRate: PropTypes.bool,
  hideAmazonRatings: PropTypes.bool,
}

ProductActionPrice.defaultProps = {
  hideAmazonRate: false,
  hideAmazonRatings: false,
}

export default ProductActionPrice
