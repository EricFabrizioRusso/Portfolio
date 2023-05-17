import React from 'react'
import LoadStyles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={LoadStyles.Loader}>
      <div className={LoadStyles.Loader__Container}><span></span></div>
      <div className={LoadStyles.Loader__Container}><span></span></div>
      <div className={LoadStyles.Loader__Container}><i></i></div>
      <div className={LoadStyles.Loader__Container}><i></i></div>
    </div>
  )
}

export default Loader