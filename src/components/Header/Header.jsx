import React, { useState } from 'react';
import hstyles from "./Header.module.css";
import ResumeLink from "/127.0.0.1_5500_Resume.html.pdf"
import { ICONS } from '../../helpers';

const Header = () => {




  return (
    <div className={hstyles.Header} id='Home'>
        <div className={hstyles.Header__Info}>
            <h1 className={hstyles.Header__Name} id='name'>I'm Eric, Frontend Developer</h1>
            <p className={hstyles.Header__Desc} id='desc'>I have a passion for writing clean and concise code that,
             in conjuction with a good understanding of web design principles,
            allows me to create work with creativity and improving my skills. </p>
          <div className={hstyles.Header__Box_image} id='image'>
              <img className={hstyles.Header__image} src="portfolioPhotos.jpg" alt="My-Photo" loading='lazy' />
          </div>
  
        </div>
        <div className={hstyles.Social}>
            <a className={hstyles.Resume} href={ResumeLink} download >Resume
            <img className={hstyles.Resume__Icon} src={ICONS.ArrowDown} alt="Resume" loading='lazy'/>
            </a>
            <a className={hstyles.Social__Icon}  href="https://github.com/EricFabrizioRusso" target='_blank' rel="noopener noreferrer">
            <img className={hstyles.Icon} src={ICONS.Git} alt="Git" loading='lazy'/>
            </a>
            <a className={hstyles.Social__Icon}  href="https://www.linkedin.com/in/eric-fabrizio-russo/" target='_blank' rel="noopener noreferrer">
            <img className={hstyles.Icon} src={ICONS.Linkedin} alt="Linkedin" loading='lazy'/>
            </a>
            <a className={hstyles.Social__Icon}  href="https://www.artstation.com/russito" target='_blank' rel="noopener noreferrer">
            <img className={hstyles.Icon} src={ICONS.Artstation} alt="Arstation" loading='lazy'/>
            </a>
        </div>
    </div>
  )
}

export default Header