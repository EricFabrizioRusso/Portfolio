import React from 'react';
import navStyles from './NavBar.module.css'

const NavBarSection = ({el}) => {
  return (
    <li className={navStyles.NavSections__li}>
        {el}
    </li>
  )
}

export default NavBarSection