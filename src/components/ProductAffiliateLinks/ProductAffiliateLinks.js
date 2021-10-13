import React from 'react'
import { Wrapper } from './ProductAffiliateLinks.Style'

const ProductAffiliateLinks = ({ amazonLink, aliexpressLink, customLinks }) => {
  return (
    <Wrapper>
      {amazonLink ? (
        <a
          target="_blank"
          href={amazonLink}
          rel="noopener noreferrer nofollow"
          className="amazonLink"
        >
          Comprar en Amazon
        </a>
      ) : null}
      {aliexpressLink ? (
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href={aliexpressLink}
          className="aliexpressLink"
        >
          Comprar en Aliexpress
        </a>
      ) : null}
      {customLinks && customLinks.length
        ? customLinks.map(({ url, store = 'tienda' }, key) =>
            url ? (
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                key={key}
                href={url}
                className="customLink"
              >
                Comprar en {store}
              </a>
            ) : null
          )
        : null}
    </Wrapper>
  )
}

export default ProductAffiliateLinks
