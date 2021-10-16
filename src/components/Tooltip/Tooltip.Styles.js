import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.white};
    color: ${colors.black};
    border-radius: 5px;
    text-align: center;
    max-width: 400px;
    width: max-content;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: none;
    .header {
      margin: 0;
      padding: 0.5rem;
      color: ${colors.blueGrayDark};
      font-weight: bold;
    }
    .body {
      margin: 0;
      padding: 0.5rem;
    }
  }
  &:focus,
  &:hover {
    .tooltip {
      display: block;
    }
  }
`
