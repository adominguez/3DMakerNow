import React from 'react'
import ProductDetailValoration from '../ProductDetail/ProductDetailValoration'
import CompareProducts from '../CompareProducts/CompareProducts'

const PrinterPage = ({ data }) => {
  const { title, ACF_Page } = data.wpPage
  const {
    content,
    printerimages: printerImages,
    aliexpresslink: aliexpressLink,
    amazonlink: amazonLink,
    customlinks: customLinks,
    compareproductscontent: compareProductsContent,
    compareproductstitle: compareProductsTitle,
    productstocompare: productsToCompare,
    productstocompareproperties: propertiesToCompare,
  } = ACF_Page || {}
  return (
    <>
    <ProductDetailValoration
      pageTitle={title}
      content={content || ''}
      images={printerImages}
      amazonLink={amazonLink}
      aliexpressLink={aliexpressLink}
      customLinks={customLinks}
    />
    {productsToCompare?.length > 0 && propertiesToCompare?.length && 
    <CompareProducts
      productsToCompare={productsToCompare}
      propertiesToCompare={propertiesToCompare}
      compareProductsTitle={compareProductsTitle}
      compareProductsContent={compareProductsContent}
    />}
    </>
  )
}

export default PrinterPage
