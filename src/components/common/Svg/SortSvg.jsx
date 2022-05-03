import React from 'react'
import cn from "classnames";

import styles from './Svg.module.css'
import { useSelector, useDispatch, } from 'react-redux';
import { toggleOrder } from '../../../store/tableReducer';

function SortSvg() {
    const dispatch = useDispatch();
    const {ascOrder} = useSelector(({ table }) => table);

    const changeSortOrder =() => {
        dispatch(toggleOrder(!ascOrder));
    };

    return (
        <svg onClick={changeSortOrder} className={ cn({
            [styles.rotatedSvg]: ascOrder === true
        }, styles.sortSvg) }
         width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
        </svg>

    )
}

export default SortSvg