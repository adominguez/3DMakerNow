import React from 'react'
import { colors } from '../../theme/colors'
import { orderProducts } from '../../languages/es'
import { Toolbar } from './ProductsList.styles'

const ProductsToolbar = ({
  typeList,
  order,
  handleOrderProducts,
  handleTypeList,
}) => (
  <Toolbar>
    <div className="left-content">
      <button onClick={() => handleTypeList('grid')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={typeList === 'grid' ? colors.primary : colors.blueGray}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </button>
      <button onClick={() => handleTypeList('list')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={typeList === 'list' ? colors.primary : colors.blueGray}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </button>
      {typeList === 'carousel' ? (
        <button onClick={() => handleTypeList('carousel')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={typeList === 'carousel' ? colors.primary : colors.blueGray}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
            />
          </svg>
        </button>
      ) : null}
    </div>
    <div className="right-content">
      <label htmlFor="order">Ordenar por</label>
      <select
        name="order"
        value={order}
        onChange={event => handleOrderProducts(event.currentTarget.value)}
      >
        {orderProducts.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  </Toolbar>
)

export default ProductsToolbar
