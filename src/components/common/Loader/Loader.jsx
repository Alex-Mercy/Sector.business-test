import React from 'react'
import styles from './Loader.module.css';
import preloader from '../../../assets/images/Preloader.gif';

function Loader() {
  return (
    <div className={styles.loader}><img src={preloader} alt='loader' /></div>
  )
}

export default Loader