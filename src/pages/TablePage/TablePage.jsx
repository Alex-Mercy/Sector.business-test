import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';

import Table from '../../components/Table/Table';
import Search from '../../components/Search/Search';
import styles from './TablePage.module.css';
import Paginator from '../../components/common/Paginator/Paginator';
import { onSetData } from '../../store/tableReducer';

function TablePage() {
    const dispatch = useDispatch();
    const {data, pagesCount} = useSelector(({ table }) => table);

    React.useEffect(() => {
        dispatch(onSetData());
    }, [dispatch]);


    return (
        <div className={styles.wrapper}>
            <Search/>
            <Table data={data} />
            <Paginator pagesCount={pagesCount} />
        </div>
    )
}

export default TablePage