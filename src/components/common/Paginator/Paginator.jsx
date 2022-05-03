import React from 'react'
import cn from "classnames";
import { useSelector, useDispatch, } from 'react-redux';

import styles from './Paginator.module.css'
import { decrementPage, incrementPage, setCurrentPage } from '../../../store/tableReducer';
import { Link} from 'react-router-dom';

function Paginator() {
  const dispatch = useDispatch();
  const { currentPage, perPage, totalCount } = useSelector(({ table }) => table);

  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = Array(pagesCount).fill().map((e, i) => i + 1);

  const onIncrementPage = () => {
    if (currentPage < 10) {
      dispatch(incrementPage())
    }
  }

  const onDecrementPage = () => {
    if (currentPage > 1) {
      dispatch(decrementPage())
    }
  }


  return (
    <div className={styles.paginatorBlock}>
      <span
        className={styles.button}
        onClick={onDecrementPage}
      >Назад
      </span>
      <span>
        {pages.map((page, index) => {
          return <span
          
            key={index}
            className={cn({
              [styles.selectedPage]: currentPage === page
            }, styles.pageNumb)}
            onClick={() => dispatch(setCurrentPage(page))}
          >
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/${page}`}>
            {page}
            </Link>
          </span>
          
        })}
      </span>

      <span
        className={styles.button}
        onClick={onIncrementPage}
      >Далее
      </span>
    </div>
  )
}

export default Paginator