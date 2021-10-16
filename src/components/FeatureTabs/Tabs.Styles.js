import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  label {
    position: relative;
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${colors.blueGray};
  }
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
  .active {
    border-bottom: 2px solid ${colors.primary};
    color: ${colors.primary};
  }
  .match-prop {
    padding: 0.5rem;
  }
`

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  .prop-data {
    border-bottom: 1px solid ${colors.blueGrayLight};
    display: flex;
    align-items: center;
    line-height: 1.5rem;
    padding: 0.3rem;
  }
  .prop-data:last-child {
    border-bottom: none;
  }
  img {
    width: 1.8rem;
    margin: 0 0.5rem;
  }
  .information {
    width: 1.5rem;
    margin: 0 0.5rem;
  }
`
