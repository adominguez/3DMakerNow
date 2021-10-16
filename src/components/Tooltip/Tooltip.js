import React from 'react'
import { TooltipContainer } from './Tooltip.styles'

const Tooltip = ({ children, content, title }) => (
  <TooltipContainer>
    <div className="tooltip">
      {title ? <p className="header">{title}</p> : null}
      <div className="body" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
    {children}
    
  </TooltipContainer>
)

export default Tooltip
