import React, {useState} from 'react';
import ProjectStyles from './Projects.module.css';


const ProjectSection = ({title,des,image,live,repo}) => {




  return (
    <div className={ProjectStyles.ProjectSection}>
        <a href={live} className={ProjectStyles.ProjectSection__Project} target="_blank">
          <h2 className={ProjectStyles.ProjectSection__Title}>{title}</h2>
          <img className={ProjectStyles.ProjectSection__Img} src={image} alt="" />
          <p className={ProjectStyles.ProjectSection__Desc}>
            {des}
          </p>
        </a>
        <div className={ProjectStyles.ProjectSection__links}>
           <a href={repo} className={ProjectStyles.links__repo} target="_blank">Repository</a>
        </div>
      
    </div>
  )
}

export default ProjectSection