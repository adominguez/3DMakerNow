import styled from 'styled-components'
import { fonts } from '../../theme/fonts'

export const Wrapper = styled.div`
  font-family: ${fonts.fira};
  font-weight: 800;
  font-size: 1rem;
  margin: 10px 0;
  padding-left: 0;
  margin-left: 0;

  @media (min-width: 992px) {
    padding-left: 25%;
    margin-left: 15px;
  }

  .divider {
    margin: 0 10px;
  }
`
