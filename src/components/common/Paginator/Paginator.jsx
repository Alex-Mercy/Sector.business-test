import React from 'react'
import styles from './Paginator.module.css'

function Paginator() {
  return (
    <div className={styles.paginatorBlock}>
      <span className={styles.button}>Назад</span>
      <span>
      {[1, 2, 3, 4, 5].map(num => {
        return <span className={styles.pageNumbs}> {num} </span>
      })}
      </span>
      
      <span className={styles.button}>Далее</span>
    </div>
  )
}

export default Paginator