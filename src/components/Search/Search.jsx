import React from 'react'
import { useState } from 'react';
import { useDispatch, } from 'react-redux';

import { addSearchValue } from '../../store/tableReducer';
import SearchSvg from '../common/Svg/SearchSvg';
import styles from './Search.module.css';

const Search = React.memo(() => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleClick = React.useCallback(() => {
    dispatch(addSearchValue(searchValue));
}, [dispatch, searchValue]);

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
          <SearchSvg findValue={handleClick} />
    </div>
  )
}
)

export default Search;