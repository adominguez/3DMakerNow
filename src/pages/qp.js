import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import SearcherCombo from '../components/SearcherCombo/SearcherCombo'
import styled from 'styled-components'
import Products from '../components/Products/Products'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import { errorMessages, windowGlobal } from '../languages/es'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 992px) {
    display: flex;
  }
`

const QuickProduct = () => {
  const { onLine } = windowGlobal && windowGlobal?.navigator
  const { search } = windowGlobal && windowGlobal?.location
  const [productsList, setProductsList] = useState(undefined)
  const [searching, setSearching] = useState(false)
  const [searchingError, setSearchingError] = useState(false)

  useEffect(() => {
    setSearchingError(false)
    if (search && search.length && search.split('s=').length > 1) {
      try {
        scrollToProducts()
        setProductsList(undefined)
        setSearching(true)
        fetch(
          'https://us-central1-automatic-web-dashboard-back.cloudfunctions.net/app/list-of-products-by-query/' + search.split('s=')[1]
        )
          .then((response) => response.json())
          .then((data) => {
            setProductsList(data)
          })
          .catch((error) => {
            setSearchingError(true)
          })
          .finally(() => {
            scrollToProducts()
            setSearching(false)
          })
      } catch (error) {
        setSearching(false)
        setProductsList([])
      }
    }
  }, [search])

  const scrollToProducts = () => {
    const searcherCombo = document.querySelector('#searcherCombo')
    const html = document.querySelector('html')
    const top = searcherCombo.clientHeight
    if (searcherCombo) {
      html.scroll({
        top,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Layout>
      <SearcherCombo useAsTitle />
      <Wrapper>
        <ContentWrapper>
          {searching ? (
            <LoadingSpinner />
          ) : null}
          {searchingError ? (
            <ErrorMessage
              textError={
                typeof onLine !== 'undefined' && !onLine
                  ? errorMessages.noInternetConnection
                  : errorMessages.searchProductError
              }
            />
          ) : null}
          {productsList ? (
            productsList.length ? (
              <Products showToolbar productsList={productsList} />
            ) : (
              <ErrorMessage textError={errorMessages.noProducts} type="empty" />
            )
          ) : null}
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default QuickProduct
