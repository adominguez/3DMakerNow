import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Section = styled.section`
  background-color: ${props => props.backgroundColor};
  .block,
  .container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    .column {
      padding: 0.5rem;
      flex: 1;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .block {
    flex-direction: column;
  }
  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 400;
    color: ${props => props.titleColor};
  }
  p {
    color: ${colors.blueGray};
  }
`

export const Comparation = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  .attributes {
    margin-top: 12rem;
    width: 25%;
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .product-information {
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    border: 1px solid ${colors.blueGray};
    border-radius: 5px;
    @media (max-width: 768px) {
      width: 100%;
      border: 0;
    }
  }
`

export const Attributes = styled.div`
  overflow: hidden;
  border-top: 1px solid ${colors.blueGray};
  border-bottom: 1px solid ${colors.blueGray};
  border-left: 1px solid ${colors.blueGray};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-top: 1px;
  p {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
    margin: -1px 0 0 0;
    text-align: center;
    color: ${colors.blueGray};
    background-color: ${colors.white};
  }
  .first {
    color: ${colors.primary};
  }
`

export const ProductInformation = styled.div`
  margin-top: 1px;
  margin-bottom: 0;
  border: 0;
  border-radius: 0;
  width: ${props => props.width};
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2.5rem;
    border-radius: 5px;
    border: 1px solid ${colors.blueGray};
  }
  .product-image-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 12rem;
    padding: 0.5rem;
    text-align: center;
    background-color: ${colors.white};
    border-radius: 5px;
    .first {
      border-top-left-radius: 5px;
    }
    .last {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  }
  p {
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    margin: -1px 0 0 0;
    height: 3rem;
    &.heading {
      font-weight: 400;
      border-top: 1px solid ${colors.blueGray};
      color: ${colors.primary};
    }
  }
  .icon {
    width: 2rem;
  }
  .product-link {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${colors.primary};
    border-top: 1px solid ${colors.blueGray};
    &:focus,
    &:hover {
      color: ${colors.primaryDark};
      text-decoration: underline;
    }
  }
  .odd {
    background-color: ${colors.blueGrayLight};
  }
`

export const StyledImg = styled(GatsbyImage)`
  max-width: 300px;
  border-radius: 4px;
  img {
    object-fit: contain;
  }
`
