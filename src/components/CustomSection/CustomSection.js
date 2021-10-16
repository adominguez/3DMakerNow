import React from 'react'
import { Section } from './CustomSection.Styles'

const CustomSection = ({
  children,
  titleColor,
  color,
  backgroundColor,
}) => (
  <Section
    titleColor={titleColor}
    backgroundColor={backgroundColor}
    color={color}
  >
    {children}
  </Section>
)

export default CustomSection
