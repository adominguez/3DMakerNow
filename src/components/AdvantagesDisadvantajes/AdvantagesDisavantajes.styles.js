import styled from "styled-components";
import { colors } from "../../theme/colors";

export const BlockWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.white};
  color: ${colors.blueGray};
  border-radius: 4px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  &.advantage {
    border: 1px solid ${colors.green};
    border-left: .5rem solid ${colors.green};
  }
  &.disadvantage {
    border: 1px solid ${colors.red};
    border-left: .5rem solid ${colors.red};
  }
`