import React from 'react'
import { Link } from 'gatsby'
import { NavigationWrapper } from './Navigation.styles'

const Navigation = ({ menu }) => {
  return (
    <NavigationWrapper>
      <ul>
        {menu.map(item =>
          !item.parentId ? (
            <li key={item.id}>
              <Link to={item.url} activeClassName="nav-active">
                {item.label}
                {item.childItems?.nodes?.length > 0 && <div>&#8964;</div>}
              </Link>
              {item.childItems?.nodes?.length > 0 && (
                <ul>
                  {item.childItems.nodes.map(child => (
                    <li key={child.id}>
                      <Link to={child.url} activeClassName="nav-active">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : null
        )}
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
