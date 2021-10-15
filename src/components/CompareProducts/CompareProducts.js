import PropTypes from 'prop-types'
import React from 'react'
import { colors } from '../../theme/colors'
import { isOdd, capitalize } from '../../utils/utils'
import { Section, Comparation, Attributes, ProductInformation, StyledImg } from './CompareProducts.Styles'
import happyIcon from '../../images/happy-icon.svg'
import sadIcon from '../../images/sad-icon.svg'

const RenderTableAttributes = ({propertiesToCompare}) => (
  <Attributes>
    <p className="odd first">
      Producto
    </p>
    {propertiesToCompare && propertiesToCompare?.length &&
      propertiesToCompare?.map(({propertyname}, index) => (
        <p
          key={`productData-${index}`}
          className={isOdd(index) ? 'odd' : ''}
        >
          {capitalize(propertyname)}
        </p>
      ))}
  </Attributes>
)

const RenderProductData = ({properties}) => {
  const renderData = (data) => {
    const text = data?.toUpperCase() !== 'SI' && data.toUpperCase() !== 'NO' ? data : data?.toUpperCase() === 'SI' ? 'SI' : 'NO'
    return (
      <span>
        {
          text !== 'SI' && text !== 'NO' ? text : <img className="icon" src={text === 'SI' ? happyIcon : sadIcon} alt="icon" />
        }
      </span>
  )}

  return properties.split('<br />').map((item, index) => (
    <p key={index} className={isOdd(index) ? 'odd' : ''}>
      {renderData(item.replace('\r\n', ''))}
    </p>
  ))
}

const RenderProductInformation = ({productsToCompare, informationButtonText}) => {
  return productsToCompare && productsToCompare.map(({ name, image, link, featurestocompare }, key) => (
    <ProductInformation
      key={`product-${key}`}
      width={`${100 / productsToCompare.length}%`}
    >
      <div className={`product-image-wrapper ${key === 0 ? 'first' : ''} ${key === productsToCompare && productsToCompare.length - 1 ? 'last' : ''}`}>
        <StyledImg image={image?.localFile?.childImageSharp?.gatsbyImageData} alt={image?.altText || name} />
      </div>
      <p title={name} className="odd heading">
        {name}
      </p>
      <RenderProductData properties={featurestocompare} />
      <a
        className="product-link"
        href={link}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {informationButtonText}
      </a>
    </ProductInformation>
  ))
}

const CompareProducts = ({
  compareProducts,
  productsToCompare,
  propertiesToCompare,
  compareProductsTitle,
  compareProductsContent,
  informationButtonText,
}) => (
  <>
    <Section backgroundColor={colors.white} titleColor={colors.primary}>
      <div className="block">
        <h2 dangerouslySetInnerHTML={{ __html: compareProductsTitle }} />
        <div dangerouslySetInnerHTML={{ __html: compareProductsContent }} />
        <Comparation>
          <div className="attributes">
            {propertiesToCompare && propertiesToCompare?.length && <RenderTableAttributes propertiesToCompare={propertiesToCompare} />}
          </div>
          <div className="product-information">
            {productsToCompare && productsToCompare?.length && <RenderProductInformation informationButtonText={informationButtonText} productsToCompare={productsToCompare} />}
          </div>
        </Comparation>
      </div>
    </Section>
  </>
)

CompareProducts.propTypes = {
  products: PropTypes.array,
  compareProductsTitle: PropTypes.string,
  informationButtonText: PropTypes.string,
}

CompareProducts.defaultProps = {
  products: [],
  compareProductsTitle: 'Comparativa de productos',
  informationButtonText: 'Ver más información',
}

export default CompareProducts
