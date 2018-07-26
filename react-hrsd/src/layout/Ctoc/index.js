import React, { Component } from 'react';
import { Router, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import { Layout } from 'antd';
import FontAwesome from 'react-fontawesome';
import Ctoc_head from '../../components/Ctoc_head';
import Tbody from '../../components/Trading_Info_Tbody';
import Thead from '../../components/Trading_Info_Thead';
import Trading_Info from '../../components/Trading_Info';
import Buy_sell from '../../components/Buy_sell';
import My_tabs from '../../components/My_Tabs';
import styles from './index.less';
import './cover_style.less';

const { Header, Footer, Sider, Content } = Layout;

const H1 = () => <h1>h1</h1>;

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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.1943,
                        quantity: 0.93064610,
                        money: 0.1186010,
                        up_or_down: 0
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                        up_or_down: 0,
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.1943,
                        quantity: 0.93064610,
                        money: 0.1186010,
                        up_or_down: 0
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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
                    },
                    {
                        price: 0.071943,
                        quantity: 0.1106010,
                        money: 0.1186014,
                        up_or_down: 0,
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


    //计算委托列表、最近交易 需要渲染数据的数量
    _new_listArr = ( arr ) => {
        let num = this._tab_body_height() / 20 ;
        console.log(this._tab_body_height());
        arr.length = parseInt((num - 0) / 2);
        return arr;
    }

    //计算body的高度
    _tab_body_height = () => {
        let h = document.documentElement.offsetHeight || document.body.offsetHeight;
        let t_body_height = h - 357;
        if(t_body_height < 280) {
            t_body_height = 280;
        }
        return t_body_height;
    }
    componentDidMount() {
        const t_bodys = document.getElementsByClassName('ctoc_right_table_body');
        const ctoc_box = document.getElementsByClassName('ctoc')[0];
        let w = document.documentElement.offsetWidth || document.body.offsetWidth;
        let h = this._tab_body_height();
        
        //委托列表、最近交易 tbody高度
        for (let i = 0; i < t_bodys.length; i++) {
            t_bodys[i].style.height = h + 'px';
        }
        
        //窗口变化
        window.onresize = function () {
            w = document.documentElement.offsetWidth || document.body.offsetWidth;
            ctoc_box.style.width = w + 'px';
            console.log(123);
        }
    }

    render() {
        const { buy_sell_data, recent_data } = this.state;
        const obj = {
            ...buy_sell_data,
            buy_data: this._new_listArr(buy_sell_data.buy_data),
            sell_data: this._new_listArr(buy_sell_data.sell_data),
        }
        
        return (
            <div className={`${styles.ctoc} ctoc`} >
                <Layout>
                    <Route path="/ctoc/h1" component={H1} />
                    <Ctoc_head />
                    <Content className={styles.content}>
                        <div className={styles.content_left}>
                            <div style={{height: '300px'}}>
                                top
                            </div>
                            <My_tabs />
                        </div>

                        {/* 右边 */}
                        <div className={styles.content_right}>
                            <div className={styles.records}>

                                {/* 委托列表 */}
                                <div className={styles.records_left}>
                                    <Trading_Info {...obj} />
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

                                        <div className="ctoc_right_table_body scroll">
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
                    </Content>  
                </Layout>
            </div>
        );
    }
}

export default Ctoc;