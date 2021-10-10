import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { createAmazonUrl } from '../../utils/utils'
import ProductActionPrice from './ProductActionPrice'

const ProductItem = ({ product }) => (
  <a className="product-item" target="_blank" rel="nofollow noopener noreferrer" href={createAmazonUrl(product.ASIN)}>
    <div className="product-item-content">
      <div className="product-item-image">
        <GatsbyImage
          image={product.ImageUrl}
          src={product.ImageUrl}
          alt={product.Title}
          placeholder="blurred"
          layout="fixed"
        />
      </div>
      <h3 className="product-item-title" title={product.Title}>{product.Title}</h3>
      <ProductActionPrice product={product} />
    </div>
  </a>
)

export default ProductItem