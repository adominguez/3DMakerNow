import React, { useState } from "react"
import Header from "../Header/Header"
import { GlobalStyles, Primary } from "./Layout.styles"
import Hamburger from "../Hamburger/Hamburger"
import Footer from "../Footer/Footer"
import OverlayMenu from "../OverlayMenu/OverlayMenu"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} menuOpen={menuOpen} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  )
}

export default Layout
