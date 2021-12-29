import styled from "styled-components";
import { colors } from '../../theme/colors';

export const Item = styled.div`
  padding: 0.5rem;
  a {
    overflow: hidden;
    display: flex;
    border-radius: 0.5rem;
    border: 1px solid ${colors.primary};
    &:hover {
      border: 1px solid ${colors.primaryDark};
    }
    img {
      margin-bottom: 0;
      width: 100%;
      object-fit: cover;
    }
    h3 {
      color: ${colors.primary};
      text-align: center;
      font-size: 1rem;
      padding: 0.5rem;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: calc(100% - 1px);
    }
  }
`