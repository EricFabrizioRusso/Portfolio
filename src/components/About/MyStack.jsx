import React from 'react';
import AboutStyles from './About.module.css';

const MyStack = ({stack}) => {
  return (
  
    <div className={AboutStyles.MyStack__Skills}>
      
        {stack}
    
  

    </div>
  )
}

export default MyStack