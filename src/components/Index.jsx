import React from 'react'
import styles from "./Index.module.css"
import Header from './Header/Header'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'

const Index = () => {

  const handleOpacity=()=>{

    const $index= document.getElementById('index')
    $index.classList.add(`${styles.index_active}`);


  }


  return (
    <div className={styles.index} id='index' onLoad={() =>handleOpacity()}>
        <Header/>
        <NavBar/>
        <About/>  
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Index