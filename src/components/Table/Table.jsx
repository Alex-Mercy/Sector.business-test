import React from 'react';
import styles from './Table.module.css';
import SortSvg from '../common/Svg/SortSvg';


function Table({ data, searchValue, onChangeSortType }) {

    const filteredData = data.filter(
        item => Object.values(item).join(' ').toLowerCase().includes(searchValue)
    );

    const headers = [
        { name: 'ID', type: 'id', },
        { name: 'Заголовок', type: 'title' },
        { name: 'Описание', type: 'body' }];

    const changeSortBy = (type) => {
        onChangeSortType(type);
    }


    return (
        <div>
            <table>
                <thead>
                    <tr className={styles.tableHeader}>
                        {headers.map(header => {
                            return <th
                                key={header.name}
                                    onClick={()=> changeSortBy(header.type)}>
                                {header.name}
                                <SortSvg />
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => {
                        return <tr key={item.id} >
                            <td className={styles.tableId}>{item.id}</td>
                            <td className={styles.tableData}>{item.title}</td>
                            <td className={styles.tableData}>{item.body}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table