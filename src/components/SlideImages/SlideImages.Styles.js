import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image'

export const StyledImg = styled(GatsbyImage)`
  max-width: 400px;
  img {
    width: 100%;
    min-height: 100px;
    max-height: 280px;
    object-fit: contain;
    cursor:pointer;
  }
`

export const ModalImg = styled(GatsbyImage)`
  max-width: 500px;
  img {
    width: 100%;
    min-height: 100px;
    max-height: 500px;
    object-fit: contain;
  }
`

export const Modal = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  .close {
    position: absolute;
    top: 30px;
    right: 20px;
    cursor: pointer;
    color: #fff;
    width: 30px;
    height: 30px;
    transition: transform .5s ease;
    outline: none;
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    z-index: 999999;
  
    :hover {
      transform: rotate(180deg);
    }
    img {
      margin-bottom: 0;
    }
  }
`