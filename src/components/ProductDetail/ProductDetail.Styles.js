import styled from 'styled-components'
import { fonts } from '../../theme/fonts'
import { colors } from '../../theme/colors'

export const Section = styled.section`
  background-color: ${props => props.backgroundColor};
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
  h1 {
    font-size: 2rem;
    text-align: center;
    font-weight: 400;
    color: ${props => props.titleColor};
  }
  p {
    color: ${colors.blueGray};
  }
`
