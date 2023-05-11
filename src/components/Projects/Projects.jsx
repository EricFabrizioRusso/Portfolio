import React from 'react'
import ProjectSection from './ProjectSection'
import ProjectStyles from './Projects.module.css'

const Projects = () => {

    const image= <h2>Logo</h2>
    const des= <h2>React</h2>
    //Component Here---

  return (
    <div className={ProjectStyles.Projects} id='Projects'>
      <h1 className={ProjectStyles.Projects__Title}>Projects</h1>
      <div className={ProjectStyles.Projects__Container}>


        <ProjectSection des={des} image={image}/>
        <ProjectSection des={des} image={image}/>
        <ProjectSection des={des} image={image}/>

      </div>
      

    </div>
  )
}

export default Projects