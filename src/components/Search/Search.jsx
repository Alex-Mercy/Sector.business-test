import React from 'react'
import { addSearchValue } from '../../store/tableReducer';
import SearchSvg from '../common/Svg/SearchSvg';
import styles from './Search.module.css';
import { useDispatch, } from 'react-redux';

function Search({searchValue}) {
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    dispatch(addSearchValue(e.target.value));
  }

  return (
    <div className={styles.searchBlock}>
        <input className={styles.input} 
        type="text" 
        name="find"  
        id="find" 
        placeholder="Поиск" 
        value={searchValue}
        onChange={handleChange}
        />
          <SearchSvg/>
    </div>
  )
}


export default Search;