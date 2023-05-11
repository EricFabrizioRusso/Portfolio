import React from 'react'
import NavBarSection from './NavBarSection';
import navStyles from './NavBar.module.css'
import { ICONS } from '../../helpers';

const NavBar = () => {

  const sections= [
    <a href="#Home" className={navStyles.NavSections__section}>
      <img className={navStyles.Icon} src={ICONS.Home} alt="Home" loading='lazy'/>
    </a>,
    <a href="#About_Me" className={navStyles.NavSections__section}>
      <img className={navStyles.Icon} src={ICONS.Person} alt="Person" loading='lazy'/>
    </a>,
    <a href="#Projects" className={navStyles.NavSections__section}>
        <img className={navStyles.Icon} src={ICONS.Suitcase} alt="Suitcase" loading='lazy'/>
     </a>,
    <a href="#Contact" className={navStyles.NavSections__section}>
       <img className={navStyles.Icon} src={ICONS.Messages} alt="Messages" loading='lazy'/>
     </a>,
    
  
  
  
  ]


  return (
    <div className={navStyles.NavBar}>
      <ul className={navStyles.NavBar__ul}>
        {
          sections.map((el,index)=> <NavBarSection key={index} el={el}/>)
        }
        <div className={navStyles.marker}></div>
      </ul>
     
    
    </div>
    
  )
}

export default NavBar;

