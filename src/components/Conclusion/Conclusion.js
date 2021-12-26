import React from 'react'
import CustomSection from '../CustomSection/CustomSection'
import { colors } from '../../theme/colors'

const Conclusion = ({ title, text }) => (
  <CustomSection
    backgroundColor={colors.blueGrayLight}
    titleColor={colors.primary}
    color={colors.blueGray}
  >
    <div className="block slider">
      <h2>{title || 'Conclusión final'}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </CustomSection>
)

export default Conclusion
