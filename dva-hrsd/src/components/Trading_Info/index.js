import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Tbody from '../../components/Trading_Info_Tbody'
import Thead from '../../components/Trading_Info_Thead'
import styles from './index.less'

//中间
const Middle = ({ average_price, up_or_down, exchange, amplitude }) => {
    let class_name = up_or_down === 0 ? styles.up : styles.down ;
    return(
        <div className={`${styles.middle} ${class_name}`}>
            <div className={styles.price_main}>
                <em>{average_price} </em>
                {
                   up_or_down === 0 ? (
                        <FontAwesome name="long-arrow-up" style={{ fontSsize: '16px' }}/>
                   ) :(
                        <FontAwesome name="long-arrow-down" style={{ fontSsize: '16px' }}/>
                   )
                }
            </div>
            
            <em> ≈ ¥ {exchange}</em>
            <div className={styles.middle_r} style={{ float: 'right' }}>
                <em>涨跌 </em>
                <i>{amplitude}</i>
            </div>
        </div>
    )
}



class Trading_Info extends Component {

    componentDidMount() {
        // console.log(document.getElementsByClassName(`${styles.table_body}`))
    }
    render() { 
        const { middle, buy_data, sell_data, title, thead_data } = this.props;
        return (
            <div className={styles.content_box}>
                <div className={styles.title}>
                    <span>{title}</span>
                </div>
                <div className={styles.table_head}>
                    <table>
                        <Thead data={thead_data} />
                    </table>
                </div>
                <div className={`ctoc_right_table_body scroll ${styles.overflow}`}>
                    <table>
                        <Tbody data={buy_data} />
                    </table>

                    <Middle {...middle} />

                    <table>
                        <Tbody data={sell_data} />
                    </table>
                </div>
            </div>  
        )
    }
}
 
export default Trading_Info;