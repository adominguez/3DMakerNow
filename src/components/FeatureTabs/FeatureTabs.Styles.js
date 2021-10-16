import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { GatsbyImage } from 'gatsby-plugin-image'

export const ContentTabs = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.blueGray};
  background-color: ${colors.white};
  border-radius: 5px;
  width: 100%;
`
