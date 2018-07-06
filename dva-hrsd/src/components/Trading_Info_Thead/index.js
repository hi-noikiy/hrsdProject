import React, { Component } from 'react';
import styles from './index.less'

//表格头
const Thead = ({ data=[] }) => {
    return (
        <thead className={styles.thead}>
            <tr>
                {
                    data.map((e, i) => <th key={i}>{e}</th>)
                }
            </tr>
        </thead>
    )
}

export default Thead;