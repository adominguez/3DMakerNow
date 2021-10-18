import React, {useEffect, useState, useRef} from 'react'
import CustomSection from "../CustomSection/CustomSection";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Products from '../Products/Products';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { errorMessages } from '../../languages/es';
import { colors } from '../../theme/colors';

const ProductsListSection = ({
  title,
  content,
  keywords,
}) => {
  const [ productsList, setProductsList ] = useState(undefined);
  const [ searching, setSearching ] = useState(false);
  let refProducts = useRef(null);

  const searchProducts = async () => {
    setSearching(true);
    if(keywords && keywords.length > 0) {
      try {
        const response = await fetch('https://us-central1-automatic-web-dashboard-back.cloudfunctions.net/app/list-of-products-by-query/' + keywords);
        const data = await response.json();
        setProductsList(data);
      } catch (error) {
        setProductsList([]);
        console.log(error);
      }
      setSearching(false);
    }
  }

  const mustBeLoaded = () => !productsList && !searching && refProducts?.current.offsetTop < window.scrollY + window.innerHeight

  useEffect(() => {
    const handleScroll = () => {
      if(refProducts?.current && mustBeLoaded()) {
        refProducts=null;
        searchProducts();
      }
    }

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (<CustomSection
    backgroundColor={colors.white}
    titleColor={colors.primary}
    color={colors.blueGray}
  >
    <div className="block" ref={refProducts}>
      <h2>{title || 'Productos relacionados'}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div>
        {searching ? <LoadingSpinner /> : null}
        {productsList ? (
          productsList.length ? (
            <Products showToolbar productsList={productsList} />
          ) : (
            <ErrorMessage textError={errorMessages.noProducts} type="empty" />
          )
        ) : null}
      </div>
    </div>
  </CustomSection>)
}

export default ProductsListSection;