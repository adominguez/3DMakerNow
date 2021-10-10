import React from 'react'
import { Link } from 'gatsby'
import InvertedLogo from '../../images/logo-inverted.svg'
import CloseButton from '../../images/close-btn.svg'
import { useMenuQuery } from '../../hooks/useMenuQuery'
import { Overlay } from './OverlayMenu.styles'

const OverlayMenu = ({ menuOpen, callback }) => {
  const { wpMenu } = useMenuQuery()
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img src={InvertedLogo} className="invertedLogo" alt="white logo" />
        <ul className="overlayMenu">
          {wpMenu?.menuItems?.nodes.map(item =>
            !item.parentId ? (
              <li key={item.id}>
                <Link activeClassName="overlayActive" to={item.url}>
                  {item.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <button className="closeButton" onClick={callback} onKeyDown={callback}>
          <img src={CloseButton} alt="close button" />
        </button>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
