import styled from 'styled-components'

export const HamburgerButton = styled.div`
  img {
    position: fixed;
    display: block;
    z-index: 100000;
    right: 10px;
    top: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`
