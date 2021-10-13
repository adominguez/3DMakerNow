import React from 'react'
import { Wrapper } from './BreadCrumb.styles'
import { Link } from 'gatsby'

const BreadCrumb = ({ links = [] }) => {
  return (
    <Wrapper>
      {links?.map((link, index) =>
        index !== links.length - 1 ? (
          <span key={link.url}>
            <Link to={link.url}>
              <span>{link.text.replace('Portada', 'Inicio')}</span>
            </Link>
            <span className="divider">&nbsp;/&nbsp;</span>
          </span>
        ) : (
          <span key={link.url}>{link.text}</span>
        )
      )}
    </Wrapper>
  )
}

export default BreadCrumb
