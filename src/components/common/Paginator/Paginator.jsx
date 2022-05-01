import React from 'react'
import styles from './Paginator.module.css'

function Paginator({pagesCount}) {
  const pages = Array(pagesCount).fill().map((e, i) => i + 1);
  
  return (
    <div className={styles.paginatorBlock}>
      <span className={styles.button}>Назад</span>
      <span>
      {pages.map(num => {
        return <span key={num} className={styles.pageNumbs}> {num} </span>
      })}
      </span>
      
      <span className={styles.button}>Далее</span>
    </div>
  )
}

export default Paginator