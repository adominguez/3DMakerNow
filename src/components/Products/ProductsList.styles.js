import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border-bottom: 1px solid ${colors.blueGray};
  width: 100%;
  button {
    background: transparent;
    border: 1px solid ${colors.blueGrayLight};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-right: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    &:focus,
    &:hover {
      background: ${colors.blueGrayLight};
    }
  }
  .left-content {
    flex: 1;
    display: flex;
    align-items: flex-end;
  }
  .right-content {
    display: flex;
    justify-content: flex-end;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  label {
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    .right-content {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .product-item {
    position: relative;
    border: 1px solid ${colors.blueGrayLight};
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &:hover {
      border: 1px solid ${colors.blueGray};
    }
    &-content {
      width: 100%;
    }
    &-image {
      position: relative;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        margin: 0;
      }
      @media (max-width: 768px) {
        height: 200px;
      }
    }
    &-title {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      margin: 0.5rem 0.2rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  .product-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${colors.blueGrayLight};
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 0.5rem;
    &:hover {
      border: 1px solid ${colors.blueGray};
    }
    &-content {
      width: 100%;
      display: flex;
      padding: 0.5rem;
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    &-image {
      position: relative;
      height: 150px;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        margin: 0;
      }
      @media (max-width: 768px) {
        height: 200px;
        width: auto;
      }
    }
    &-title {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      padding: 0.5rem;
      box-sizing: border-box;
      margin: 0;
      @media (max-width: 768px) {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 1rem;
      }
    }
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  span {
    padding-right: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.primary};
    text-align: center;
  }
`

export const Stars = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  .reviews {
    font-size: 1rem;
    font-weight: bold;
    color: ${colors.blueGray};
    text-align: center;
    padding: 0;
  }
  .stars {
    display: flex;
    justify-content: center;
    .star {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`
