import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Section = styled.section`
  background-color: ${props => props.backgroundColor || colors.white};
  color: ${props => props.color || colors.blueGray};
  .block,
  .container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    .column {
      padding: 0.5rem;
      flex: 1;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .block {
    flex-direction: column;
  }
  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 400;
    color: ${props => props.titleColor || colors.primary};
  }
`
