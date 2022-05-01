import React from 'react';
import styles from './Table.module.css';
import SortSvg from '../common/Svg/SortSvg';


function Table() {
    return (
        <div>
            <table>
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
                <tr>
                    <td className={styles.tableId}>1</td>
                    <td className={styles.tableData}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</td>
                    <td className={styles.tableData}>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</td>
                </tr>
                <tr>
                    <td className={styles.tableId}>1</td>
                    <td className={styles.tableData}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</td>
                    <td className={styles.tableData}>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</td>
                </tr>
            </table>
        </div>
    )
}

export default Table