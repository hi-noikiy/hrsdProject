import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import FontAwesome from 'react-fontawesome';
import Ctoc_head from '../../components/Ctoc_head'
import Tbody from '../../components/Trading_Info_Tbody'
import Thead from '../../components/Trading_Info_Thead'
import Trading_Info from '../../components/Trading_Info'
import Buy_sell from '../../components/Buy_sell'
import styles from './index.less'
import './cover_style.less'

const { Header, Footer, Sider, Content } = Layout;



@connect(({  }) => ({
    
}))
class Ctoc extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            buy_sell_data: {
                title: '委托列表',
                thead_data: [
                    '价格(BTC)',
                    '数量(ETH)',
                    '金额(BTC)'
                ],
                buy_data: [
                    {
                        price: 0.071944,
                        quantity: 0.13054610,
                        money: 0.1186015,
                        up_or_down: 0,
                        show: true
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
                        show: true
                    },
                    {
                        price: 0.071942,
                        quantity: 0.13010,
                        money: 0.1186013,
                        up_or_down: 0
                    },
                    {
                        price: 0.0719,
                        quantity: 0.33064610,
                        money: 0.1186012,
                        up_or_down: 0
                    },
                    {
                        price: 0.07244,
                        quantity: 0.33044610,
                        money: 0.1186011,
                        up_or_down: 0
                    },
                    {
                        price: 0.1943,
                        quantity: 0.93064610,
                        money: 0.1186010,
                        up_or_down: 0
                    }
                ],
                sell_data: [
                    {
                        price: 0.071944,
                        quantity: 0.13054610,
                        money: 0.1186015,
                        up_or_down: 1
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 1
                    },
                    {
                        price: 0.071942,
                        quantity: 0.13010,
                        money: 0.1186013,
                        up_or_down: 1
                    },
                    {
                        price: 0.0719,
                        quantity: 0.33064610,
                        money: 0.1186012,
                        up_or_down: 1
                    },
                    {
                        price: 0.07244,
                        quantity: 0.33044610,
                        money: 0.1186011,
                        up_or_down: 1
                    },
                    {
                        price: 0.1943,
                        quantity: 0.93064610,
                        money: 0.1186010,
                        up_or_down: 1
                    }
                ],
                middle: {
                    average_price: 0.071670,
                    up_or_down: 0,
                    exchange: 3116.51,
                    amplitude: '+0.24%'
                }
            },
            recent_data: {
                title: '最近交易',
                thead_data: [
                    '价格(BTC)',
                    '数量(ETH)',
                    '时间'
                ],
                list: [
                    {
                        price: 0.071944,
                        quantity: 0.13054610,
                        money: 0.1186015,
                        up_or_down: 0,
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 1,
                        show: true
                    },
                    {
                        price: 0.071942,
                        quantity: 0.13010,
                        money: 0.1186013,
                        up_or_down: 0
                    },
                    {
                        price: 0.0719,
                        quantity: 0.33064610,
                        money: 0.1186012,
                        up_or_down: 0,
                        show: true
                    },
                    {
                        price: 0.07244,
                        quantity: 0.33044610,
                        money: 0.1186011,
                        up_or_down: 1
                    },
                    {
                        price: 0.1943,
                        quantity: 0.93064610,
                        money: 0.1186010,
                        up_or_down: 0,
                        show: true
                    },
                    {
                        price: 0.071944,
                        quantity: 0.13054610,
                        money: 0.1186015,
                        up_or_down: 0,
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 1,
                        show: true
                    },
                    {
                        price: 0.071942,
                        quantity: 0.13010,
                        money: 0.1186013,
                        up_or_down: 0
                    },
                    {
                        price: 0.0719,
                        quantity: 0.33064610,
                        money: 0.1186012,
                        up_or_down: 0,
                        show: true
                    },
                    {
                        price: 0.07244,
                        quantity: 0.33044610,
                        money: 0.1186011,
                        up_or_down: 0
                    },
                    {
                        price: 0.1943,
                        quantity: 0.93064610,
                        money: 0.1186010,
                        up_or_down: 0,
                        show: true
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 1,
                        show: true
                    },
                    {
                        price: 0.071942,
                        quantity: 0.13010,
                        money: 0.1186013,
                        up_or_down: 0
                    },
                    {
                        price: 0.0719,
                        quantity: 0.33064610,
                        money: 0.1186012,
                        up_or_down: 0,
                        show: true
                    },
                    {
                        price: 0.07244,
                        quantity: 0.33044610,
                        money: 0.1186011,
                        up_or_down: 0
                    },
                    {
                        price: 0.1943,
                        quantity: 0.93064610,
                        money: 0.1186010,
                        up_or_down: 0,
                        show: true
                    }
                ],
            },
            Buy_sell: {
                
            }
        }
    }
    render() {
        const { buy_sell_data, recent_data } = this.state;
        console.log(recent_data.thead_data);
        return (
            <div className={`${styles.ctoc} ctoc`} >
                <Layout>
                    <Ctoc_head />
                    <div className={styles.content}>
                        <div className={styles.content_left}>
                            <div>
                                top
                            </div>
                            <div>
                                bottom
                            </div>
                        </div>

                        {/* 右边 */}
                        <div className={styles.content_right}>
                            <div className={styles.records}>

                                {/* 委托列表 */}
                                <div className={styles.records_left}>
                                    <Trading_Info {...buy_sell_data} />
                                </div>
                                
                                {/* 最近交易 */}
                                <div className={styles.records_right}>
                                    <div className={styles.content_box}>
                                        <div className={styles.title}>
                                            <span>{recent_data.title}</span>
                                        </div>

                                        <div className={styles.table_head}>
                                            <table>
                                                <Thead data={recent_data.thead_data} />
                                            </table>
                                        </div>

                                        <div className={`${styles.table_body} scroll`}>
                                            <table>
                                                <Tbody data={recent_data.list} />
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* 最近交易end */}

                            </div>

                            {/* 买入/卖出 */}
                            <Buy_sell />
                            
                        </div>
                        {/* 右边end */}
                    </div>  
                </Layout>
            </div>
        );
    }
}

export default Ctoc;