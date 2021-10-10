import React from 'react'
import { HamburgerButton } from './Hamburger.styles'
import HamburgerIcon from '../../images/menu-icon.svg'

const Hamburger = ({ handleOverlayMenu }) => {
  return (
    <HamburgerButton onClick={handleOverlayMenu}>
      <img src={HamburgerIcon} alt="Hamburger Icon" />
    </HamburgerButton>
  )
}

export default Hamburger
