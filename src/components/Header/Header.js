import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/logo.svg'
import LogoMovil from '../../images/logo-movil.svg'
import { Wrapper, Content } from './Header.styles'
import { useMenuQuery } from '../../hooks/useMenuQuery'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  const { wpMenu, site } = useMenuQuery()
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img className="logo" src={Logo} alt={site.siteMetadata.title} />
          <img className="logo-mobile" src={LogoMovil} alt={site.siteMetadata.title} />
        </Link>
        <Navigation menu={wpMenu?.menuItems?.nodes} />
      </Content>
    </Wrapper>
  )
}
export default Header
