import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Wrapper = styled.header`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.blueGrayLight};
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
  .logo {
    width: 200px;
    margin: 0;
    padding: 6px 0;
    display: block;
  }
  .logo-mobile {
    width: 60px;
    padding: 6px 0;
    display: none;
    margin: 0;
  }
  @media (max-width: 768px) {
    padding: 0 10px;
    .logo {
      display: none;
    }
    .logo-mobile {
      display: block;
    }
  }
`
