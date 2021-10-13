import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  grid-gap: 10px;
  width: 100%;
  a {
    border-radius: 50px;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
  }
  .amazonLink {
    background-color: ${colors.amazon};
    border-color: ${colors.amazonHover};
    color: ${colors.white};
    &:focus,
    &:hover {
      background-color: ${colors.amazonHover};
    }
  }
  .aliexpressLink {
    background-color: ${colors.aliexpress};
    border-color: ${colors.aliexpressHover};
    color: ${colors.white};
    &:focus,
    &:hover {
      background-color: ${colors.aliexpressHover};
    }
  }
  .customLink {
    background-color: ${colors.secondary};
    border-color: ${colors.secondaryDark};
    color: ${colors.white};
    &:focus,
    &:hover {
      background-color: ${colors.secondaryDark};
    }
  }
`
