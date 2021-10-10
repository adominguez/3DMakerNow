import React from 'react'
import { Grid } from './ProductsList.styles'
import ProductItem from './ProductItem'

const ProductsGrid = ({productsList}) => (
  <Grid>
    {
      productsList.map((product) => (
        <ProductItem product={product} key={product.ASIN} />
      ))
    }
  </Grid>
)

export default ProductsGrid