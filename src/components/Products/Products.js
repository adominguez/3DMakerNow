import React, { useState, useEffect } from 'react'
import ProductsToolbar from './ProductsToolbar'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import ProductsCarousel from './ProductsCarousel'

const Products = ({
  productsList = [],
  type = 'grid',
  showToolbar,
}) => {
  const [typeList, setTypeList] = useState(type)
  const [order, setOrder] = useState('Por relevancia')
  const [productsListState, setProductsListState] = useState(undefined)

  useEffect(() => {
    if (productsList && productsList?.length) {
      setProductsListState(
        (productsList || []).map((item, index) => ({
          ...item,
          order: index + 1,
        }))
      )
    } else {
      setProductsListState(undefined)
    }
  }, [productsList])

  const parseNumber = (str) => {
    const number = str.replace(' €', '').replace(',', '.')
    if (number.indexOf('.') > -1) {
      return parseFloat(number)
    } else {
      return parseInt(number)
    }
  }

  const productsListOrdered = () => {
    if (order === 'Por relevancia' || !showToolbar) {
      return (productsListState || []).sort((a, b) => {
        return a.order - b.order
      })
    }
    if (order.includes('caros')) {
      return productsList.sort((a, b) => {
        return parseNumber(b.Price) - parseNumber(a.Price)
      })
    }
    if (order.includes('baratos')) {
      return productsList.sort((a, b) => {
        return parseNumber(a.Price) - parseNumber(b.Price)
      })
    }
    if (order.includes('vendidos')) {
      return productsList.sort((a, b) => {
        return parseNumber(b.TotalReviews) - parseNumber(a.TotalReviews)
      })
    }
  }

  return (
    <>
      {productsList?.length ? showToolbar && <ProductsToolbar typeList={typeList} order={order} handleOrderProducts={setOrder} handleTypeList={setTypeList} /> : null}
      {productsList?.length && typeList === 'grid' ? (
        <ProductsGrid productsList={productsListOrdered()} />
      ) : null}
      {productsList?.length && typeList === 'carousel' ? (
        <ProductsCarousel productsList={productsListOrdered()} />
      ) : null}
      {productsList?.length && typeList === 'list' ? (
        <ProductsList productsList={productsListOrdered()} />
      ) : null}
    </>
  )
}

export default Products
