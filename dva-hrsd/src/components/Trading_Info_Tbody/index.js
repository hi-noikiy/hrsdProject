import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './index.less'
import './cover_style.less';

// 上涨、下跌图标
const Icon = ( {up_or_down} ) => {
    let icon = '';
    if(up_or_down === 0) {
        icon = <FontAwesome name="long-arrow-up" style={{ fontSsize: '12px' }}/>
    }else if (up_or_down === 1) {
        icon = <FontAwesome name="long-arrow-down" style={{ fontSsize: '12px' }}/>
    }
    return (
        icon
    )
};

//表格内容
 const Tbody = ({ data }) => {
    return (
        <tbody className={styles.tbody}>
            {
                data.map((e, i) => {
                    return (
                    <tr key={i}>
                        <td className={e.up_or_down ===0 ? styles.up : styles.down}>
                            <span>{e.price} </span>
                            {e.show == true ? <Icon up_or_down={e.up_or_down} /> : ''}
                        </td>
                        <td>{e.quantity}</td>
                        <td>{e.money}</td>
                    </tr>
                    )
                })
            }
        </tbody>
    )
}
export default Tbody;