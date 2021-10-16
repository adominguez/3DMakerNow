import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Image = styled(GatsbyImage)`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`