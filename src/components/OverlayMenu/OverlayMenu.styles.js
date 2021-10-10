import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  transform: ${props =>
    props.menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  z-index: 100000;
  background: ${colors.white};
  left: 0px;
  padding: 20px;
  transition: all 0.3s ease;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.secondaryDark};
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 20px;

    .invertedLogo {
      max-width: 200px;
      margin: 0 0 60px 0;
    }

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 0;

      li {
        margin: 0 0 1rem 0;
      }

      li.overlayActive {
        color: #ee2562;
      }

      a {
        font-family: ${fonts.fira};
        font-size: 1.5rem;
        color: #fff;
        transition: all 0.3s ease;
        text-decoration: none;

        :hover {
          color: ${colors.primary}
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: transform 1s ease;
    outline: none;
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;

    :hover {
      transform: rotate(180deg);
    }
    img {
      margin-bottom: 0;
    }
  }
`
