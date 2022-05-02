import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';

import Table from '../../components/Table/Table';
import Search from '../../components/Search/Search';
import styles from './TablePage.module.css';
import Paginator from '../../components/common/Paginator/Paginator';
import { onSetData, setSortBy, toggleOrder } from '../../store/tableReducer';

function TablePage() {
    const dispatch = useDispatch();
    const {data, pagesCount, searchValue, sortBy, ascOrder} = useSelector(({ table }) => table);

    React.useEffect(() => {
        dispatch(onSetData({sortBy, ascOrder}));
    }, [dispatch, sortBy, ascOrder]);

    const onChangeSortType = (sortBy) => {
        dispatch(setSortBy(sortBy));
    };



    return (
        <div className={styles.wrapper}>
            <Search 
            searchValue={searchValue} 
            />
            <Table data={data} 
            searchValue={searchValue}
            onChangeSortType={onChangeSortType}
             />
            <Paginator pagesCount={pagesCount} />
        </div>
    )
}

export default TablePage