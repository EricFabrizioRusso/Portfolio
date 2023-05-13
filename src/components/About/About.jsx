import React, { useState, useEffect } from 'react';
import MyStack from './MyStack';
import NavBarAbout from './NavBarAbout';
import Tools from './Tools';
import AboutStyles from './About.module.css'
import {LOGOS} from '../../helpers';

  
const SECTIONS_TYPES={

  STACK: "MyStack-btn",
  

  TOOLS:"MyStack-btn"

}


const languges=[

  <img src={LOGOS.Html} className={AboutStyles.About__logo} alt="Html" />,
  <img src={LOGOS.Css} className={AboutStyles.About__logo} alt="CSS" />,
  <img src={LOGOS.JavaScript} className={AboutStyles.About__logo} alt="JS" />,
  <img src={LOGOS.ReactJS} className={AboutStyles.About__logo} alt="ReactJS" />,


    


]


  /*document.addEventListener("click", (e)=>{


    if(e.target.id === "MyStack-btn"){
  
      const stack= document.getElementById('MyStack');
      const tools= document.getElementById('Tools');
      stack.style.display= 'block';
      tools.style.display= 'none';
      //console.log(stack)
  
    }
    
    if(e.target.id === "Tools-btn"){
      
      const stack= document.getElementById('MyStack');
      const tools= document.getElementById('Tools');
      tools.style.display= 'block';
      stack.style.display= 'none';
      //console.log("Tools")
  
  
    }
  
  
   })*/


  const tools=[
   <img src={LOGOS.Npm} className={AboutStyles.About__logo} alt="Npm" />,
   <img src={LOGOS.Git} className={AboutStyles.About__logo} alt="Git" />,
   <img src={LOGOS.Ps} className={AboutStyles.About__logo} alt="PS" />,
   <img src={LOGOS.Blender} className={AboutStyles.About__logo} alt="Blender" />,
   
  ]

const About = () => {


 const [Section, setSection] = useState(SECTIONS_TYPES.STACK);



  const handleStack=()=>{


    const $stack= document.getElementById('MyStack');
    const $tools= document.getElementById('Tools');

    if(Section === SECTIONS_TYPES.STACK){
  
  
     $stack.style.display= 'block';
     $tools.style.display= 'none';
     //console.log(stack)
     return
    
  
   }



  }

  const handleTools=()=>{


    const $stack= document.getElementById('MyStack');
    const $tools= document.getElementById('Tools');

    if(Section === SECTIONS_TYPES.TOOLS){

   
  
      $tools.style.display= 'block';
      $stack.style.display= 'none';
      //console.log("Tools")
      return
   
  
  
    }



  }

 
  const btn=[
    <button className={AboutStyles.Btn__Sections__Section} onClick={()=>  handleStack()} id='MyStack-btn'>My Stack</button>,
    <button className={AboutStyles.Btn__Sections__Section} onClick={()=>  handleTools()} id='Tools-btn'  >Tools</button>
  ]



  return (
      <div className={AboutStyles.About} id='About_Me'>
          <h1 className={AboutStyles.About__Title}>About me</h1>

        <div className={AboutStyles.Btn}>

          {
            
            btn.map((el,index)=> <NavBarAbout key={index} btn={el}/>)
          }

        </div>
        <div className={`${AboutStyles.MyStack} ${AboutStyles.MyStack_active}`} id='MyStack'>
      
            <p className={AboutStyles.MyStack__Desc}>
            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit iusto quasi reiciendis
            ea minus, reprehenderit nesciunt eos maxime modi nostrum esse deserunt quam libero
            voluptas voluptate nobis ipsam ad cum. */}
            A long the way i started to learning markup and style languages
            
            </p>
            <div className={AboutStyles.MyStack__Container}>

                {

            

                  languges.map((el,index)=>
                  
                  
                  
                      <MyStack key={index} stack={el}/>
                  
                  )

                }
            </div>

        </div>

        <div className={AboutStyles.Tools} id='Tools'>
      
            <p className={AboutStyles.Tools__Desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit iusto quasi reiciendis
              ea minus, reprehenderit nesciunt eos maxime modi nostrum esse deserunt quam libero
              voluptas voluptate nobis ipsam ad cum.
            </p>

            <div className={AboutStyles.Tools__Container}>


              {
                tools.map((el,index)=> <Tools key={index} tool={el}/>)

              }


            </div>
        </div>


    </div>
  )


  


              



}

export default About;





