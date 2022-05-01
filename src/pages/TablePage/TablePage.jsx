import React from 'react'
import Table from '../../components/Table/Table';
import Search from '../../components/Search/Search';
import styles from './TablePage.module.css';
import Paginator from '../../components/common/Paginator/Paginator';

function TablePage() {
    return (
        <div className={styles.wrapper}>
            <Search/>
            <Table />
            <Paginator/>
        </div>
    )
}

export default TablePage