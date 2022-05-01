import React from 'react';
import styles from './Table.module.css';
import SortSvg from '../common/Svg/SortSvg';


function Table({ data }) {
    return (
        <div>
            <table>
            <thead>
                <tr className={styles.tableHeader}>
                    <th>
                        ID
                        <SortSvg />
                    </th>
                    <th>
                        Заголовок
                        <SortSvg />
                    </th>
                    <th>
                        Описание
                        <SortSvg />
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => {
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