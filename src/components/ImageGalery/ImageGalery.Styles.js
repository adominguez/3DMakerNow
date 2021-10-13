import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { colors } from '../../theme/colors'

export const ImageGaleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  max-width: 100%;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
`

export const PreviewImage = styled(GatsbyImage)`
  max-width: 420px;
  border: 1px solid ${colors.blueGray};
  border-radius: 4px;
`

export const Thumbnail = styled(GatsbyImage)`
  width: 50px;
  border: 1px solid ${colors.blueGray};
  border-radius: 4px;
  img {
    filter: blur(1px);
    transition: all 0.3s !important;
    cursor: pointer;
  }
  &:hover {
    img {
      filter: blur(0px);
      transform: scale(1.1);
    }
  }
`

export const ImageGaleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  z-index: 2;
  overflow: auto;
  max-height: 400px;
  @media (max-width: 1150px) {
    display: flex;
    justify-content: center;
    max-width: 420px;
    align-items: center;
    position: relative;
    margin: 10px;
  }
`
