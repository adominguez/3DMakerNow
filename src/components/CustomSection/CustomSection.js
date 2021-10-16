import React from 'react'
import { Section } from './CustomSection.Styles'


const CustomSection = ({children, titleColor, title, color, backgroundColor, content}) => (
  <Section titleColor={titleColor} backgroundColor={backgroundColor} color={color}>
    {children}
  </Section>
)

export default CustomSection