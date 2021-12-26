import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Answer = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    border: 1px solid ${colors.blueGrayDark};
    background-color: ${colors.blueGrayLight};
    align-items: center;
    margin: .5rem 0;
    &.opened,
    &:focus,
    &:hover {
      background-color: ${colors.blueGrayDark};
      color: ${colors.white};
    }
    h3 {
      font-size: 1rem;
      margin: 0;
    }
    span {
      width: 1rem;
      transform: rotate(90deg);
      transition: transform 200ms ease-in-out
    }
    span.opened {
      transform: rotate(-90deg);
    }
  }

  .response {
    height: 0;
    overflow: hidden;
    transition: height 200ms ease-in-out;
    &.opened {
      height: auto;
      overflow: auto;
      padding: .5rem;
    }
  }
`
