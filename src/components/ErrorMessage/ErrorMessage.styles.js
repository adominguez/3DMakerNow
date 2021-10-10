import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  p {
    padding: 0 0.5rem;
    font-size: 1.2rem;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 0;
  }
  .title-error {
    color: ${colors.red};
    font-size: 1.5rem;
  }
  .empty-error {
    color: ${colors.primaryDark};
    font-size: 1.5rem;
  }
`
