import React from 'react'
import ProjectSection from './ProjectSection'
import ProjectStyles from './Projects.module.css'

const Projects = () => {

    const image= <h2>Logo</h2>
    const des= <h2>React</h2>
    //Component Here---
    const gallery={

      title: 'Hobbies',

      background: 'galleryBackground.png',

      description:'A gallery that includes external works, unrelated to the code',

      live:'https://ericrusso-gallery.netlify.app/',

      repo:'https://github.com/EricFabrizioRusso/Gallery.git'

    }

    const weatherApp={

      title: 'Weather App',

      background: 'ScreeshotWeatherApp.png',

      description:'In this application, you can access the weather conditions of a city.',

      live:'https://eric-russo-weatherapp.netlify.app/',

      repo:'https://github.com/EricFabrizioRusso/WeatherApp'

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
        <ProjectSection
        title={weatherApp.title} 
        des={weatherApp.description} 
        image={weatherApp.background}
        live={weatherApp.live}
        repo={weatherApp.repo}
        />
      

      </div>
      

    </div>
  )
}

export default Projects