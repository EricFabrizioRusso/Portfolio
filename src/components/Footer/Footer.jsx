import React from 'react'
import FooterStyles from './Footer.module.css'
import { ICONS } from '../../helpers'

const Footer = () => {
  return (
    <div className={FooterStyles.Footer}>
        <ul className={FooterStyles.Social}>
         <li className={FooterStyles.Social__li}>
            <a className={FooterStyles.Social__Icon}  href="https://github.com/EricFabrizioRusso" target='_blank' rel="noopener noreferrer">
              <img className={FooterStyles.Icon} src={ICONS.Git} alt="Git" loading='lazy'/>
            </a>
          </li>
          <li className={FooterStyles.Social__li}>
            <a className={FooterStyles.Social__Icon}  href="https://www.linkedin.com/in/eric-fabrizio-russo/" target='_blank' rel="noopener noreferrer">
              <img className={FooterStyles.Icon} src={ICONS.Linkedin} alt="Linkedin" loading='lazy'/>
            </a>
          </li>
          <li className={FooterStyles.Social__li}>
            <a className={FooterStyles.Social__Icon}  href="https://www.artstation.com/russito" target='_blank' rel="noopener noreferrer">
              <img className={FooterStyles.Icon} src={ICONS.Artstation} alt="Linkedin" loading='lazy'/>
            </a>
          </li>
            
        </ul>
    </div>
  )
}

export default Footer