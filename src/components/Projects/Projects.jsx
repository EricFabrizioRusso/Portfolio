import React from 'react'
import ProjectSection from './ProjectSection'
import ProjectStyles from './Projects.module.css'

const Projects = () => {

    const image= <h2>Logo</h2>
    const des= <h2>React</h2>
    //Component Here---
    const gallery={

      title: 'Hobbies',

      background: '/galleryBackground.png',

      description:'A gallery that includes external works, unrelated to the code',

      live:'https://ericrusso-gallery.netlify.app/',

      repo:'https://github.com/EricFabrizioRusso/Gallery.git'

    }

  return (
    <div className={ProjectStyles.Projects} id='Projects'>
      <h1 className={ProjectStyles.Projects__Title}>Projects</h1>
      <div className={ProjectStyles.Projects__Container}>


        <ProjectSection
        title={gallery.title} 
        des={gallery.description} 
        image={gallery.background}
        live={gallery.live}
        repo={gallery.repo}
        />
      

      </div>
      

    </div>
  )
}

export default Projects