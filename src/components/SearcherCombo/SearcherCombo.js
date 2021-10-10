import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getImage } from "gatsby-plugin-image"
import { Wrapper, StyledImg } from './SearcherCombo.styles'
import { useSearcherCombo } from '../../hooks/useSearcherCombo'
import SearcherForm from './SearcherForm'
import { products, searcherComboTexts, printyText } from '../../languages/es'


const HeaderContent = ({useAsTitle, subtitle, title}) => (
  useAsTitle ?
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  : <>
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </>
)

const SearcherCombo = ({
  useAsTitle,
  title = searcherComboTexts.title,
  subtitle = searcherComboTexts.subtitle,
}) => {
  const {
    ACF_HomePage
  } = useSearcherCombo().wpPage
  const [ product, setProduct ] = useState(products[0].value)
  const getImageFromProduct = () => ACF_HomePage[product]

  return (
    <Wrapper>
      <div className="wrapper-content">
        <div className="content left-content">
          <HeaderContent useAsTitle={useAsTitle} title={title} subtitle={subtitle} />
          <SearcherForm handlerChangeProduct={setProduct} />
        </div>
        <div className="content">
          <p className="content-message">{printyText[product]}</p>
          <StyledImg image={getImage(getImageFromProduct().localFile)} alt={getImageFromProduct().altText} />
        </div>
      </div>
    </Wrapper>
  )
}

HeaderContent.propTypes = {
  useAsTitle: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

SearcherCombo.propTypes = {
  useAsTitle: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default SearcherCombo
