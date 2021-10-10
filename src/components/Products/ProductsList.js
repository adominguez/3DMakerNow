import React from 'react'
import { List } from './ProductsList.styles'
import ProductItem from './ProductItem'

const ProductsList = ({productsList}) => (
  <List>
    {
      productsList.map((product) => (
        <ProductItem product={product} key={product.ASIN} />
      ))
    }
  </List>
)

export default ProductsList