import React from 'react'
import ProductDetailValoration from '../ProductDetail/ProductDetailValoration';

const PrinterPage = ({ data }) => {
  const { title, ACF_Page } = data.wpPage
  const { content, printerimages, aliexpresslink: aliexpressLink, amazonlink: amazonLink, customlinks: customLinks } = ACF_Page || {}
  return (
    <ProductDetailValoration pageTitle={title} content={content || ''} images={printerimages} amazonLink={amazonLink} aliexpressLink={aliexpressLink} customLinks={customLinks} />
  );
};

export default PrinterPage;