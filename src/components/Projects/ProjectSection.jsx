import React, {useState} from 'react';
import ProjectStyles from './Projects.module.css';


const ProjectSection = ({title,desc,image}) => {




  return (
    <div className={ProjectStyles.ProjectSection}>
        <a href='' className={ProjectStyles.ProjectSection__Project}>
          <h2 className={ProjectStyles.ProjectSection__Title}>Title</h2>
          <img className={ProjectStyles.ProjectSection__Img} src="" alt="" />
          <p className={ProjectStyles.ProjectSection__Desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda suscipit quas iure iusto vero ab laudantium
            quaerat quidem veritatis obcaecati quasi nihil itaque,
            cum harum enim magnam ad sed aliquam.
          </p>
        </a>
      
    </div>
  )
}

export default ProjectSection