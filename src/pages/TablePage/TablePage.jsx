import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';

import Table from '../../components/Table/Table';
import Search from '../../components/Search/Search';
import styles from './TablePage.module.css';
import Paginator from '../../components/common/Paginator/Paginator';
import { onSetData, setSortBy} from '../../store/tableReducer';

function TablePage() {
    const dispatch = useDispatch();
    const {data, searchValue, sortBy, ascOrder, currentPage, isLoaded} = useSelector(({ table }) => table);

    React.useEffect(() => {
        dispatch(onSetData({sortBy, ascOrder, currentPage, searchValue}));
    }, [dispatch, sortBy, ascOrder, currentPage, searchValue]);

    const onChangeSortType = React.useCallback((sortBy) => {
        dispatch(setSortBy(sortBy));
    }, [dispatch]);

    return (
        <div className={styles.wrapper}>
            <Search 
            />
            <Table data={data} 
            onChangeSortType={onChangeSortType}
            isLoaded={isLoaded}
             />
            <Paginator/>
        </div>
    )
}

export default TablePage