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
  <img src={LOGOS.NodeJs} className={AboutStyles.About__logo} alt="NodeJs" />,
  <img src={LOGOS.SQL} className={AboutStyles.About__logo} alt="SQL" />,


    


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


 const Section=SECTIONS_TYPES.STACK;

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
            My beginning, like that of most people, started with markup and styling languages.<br></br> 
            My first step into the programming world was with JavaScript,
            and I continued my learning journey with React,
            focusing on topics like hooks, useState, useEffect, and routers.
            <br></br>Currently, I'm expanding my knowledge in JavaScript backend development, including Node.js, the Express framework, and MongoDB.
            
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
            I can combine all my knowledge in web development with external tools that I use for design in other areas.
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





