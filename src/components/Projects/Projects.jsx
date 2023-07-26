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

      description:'A gallery that includes external works, unrelated to code',

      live:'https://ericrusso-gallery.netlify.app/',

      repo:'https://github.com/EricFabrizioRusso/Gallery.git'

    }

    const weatherApp={

      title: 'Weather App',

      background: 'ScreeshotWeatherApp.png',

      description:'In this application, you can access the weather conditions for a city.',

      live:'https://eric-russo-weatherapp.netlify.app/',

      repo:'https://github.com/EricFabrizioRusso/WeatherApp'

    }

    const colorGame={

      title: 'Select the color of the word',

      background: 'colorBackground.png',

      description:'In this application, you have to select the color of the word before time runs out.',

      live:'https://64b4942dbd75e915cfdefe14--selectcolorgame.netlify.app/',

      repo:'https://github.com/EricFabrizioRusso/SelectColorGame'

    }
    const gameLibrary={

      title: 'MPGames',

      background: 'mpGames.png',

      description:'A library where you have access to the catalog of multiplayer games separated by category.',

      live:'https://gamelibrarymp.netlify.app/',

      repo:'https://github.com/EricFabrizioRusso/GameLibrary'

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
           <ProjectSection
        title={colorGame.title} 
        des={colorGame.description} 
        image={colorGame.background}
        live={colorGame.live}
        repo={colorGame.repo}
        />
           <ProjectSection
        title={gameLibrary.title} 
        des={gameLibrary.description} 
        image={gameLibrary.background}
        live={gameLibrary.live}
        repo={gameLibrary.repo}
        />
      

      </div>
      

    </div>
  )
}

export default Projects