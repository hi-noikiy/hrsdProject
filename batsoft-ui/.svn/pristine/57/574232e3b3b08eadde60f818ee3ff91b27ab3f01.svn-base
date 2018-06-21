import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux, Route, Switch } from 'dva/router';
import FontAwesome from 'react-fontawesome';
// import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.less';




const Tab_t_list = ({ tab_t_arr, active, tab_tit_onclick, dispatch }) => {
    return(
        <ul className='clearfix' >
            {
                tab_t_arr.map((e, i) => {
                    //判断图标
                    const icon = e.icon=='star' ? 
                    <FontAwesome name="star" style={{ fontSsize: '16px',color: '#f9b159' }}/>
                    : <img src={e.icon} /> ;
                    
                    //选中
                    const active_css = active==i ? styles.active : '';
                    return (
                        <li className={active_css} key={i} onClick={()=>{ tab_tit_onclick(i); dispatch({ type: 'index_data/fetch' }) }} >
                            {icon}
                            <span>{e.text}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const Tbody = ({ tab_data }) => {
    console.log(tab_data,123)
    return (
        <tbody className="ant-table-tbody" >
            {
                tab_data.map((e, i) => {
                    return (
                        <tr key={i} >
                            <td>{e.name}</td>
                            <td>{e.url}</td>
                            <td>{e.number}</td>
                            <td>{e.boolean}</td>
                            <td>{e.string}</td>
                            <td>{e.email}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

                                

@connect(({ index_data, login }) => ({
    index_data,
    login
  }))
class Index_main extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            tab_t_arr: [
                {
                    icon: 'star',
                    text: '自选'
                },
                {
                    icon: require("../../assets/tab1.png"),
                    text: 'WXG'
                },
                {
                    icon: require("../../assets/tab2.png"),
                    text: 'USDT'
                },
                {
                    icon: require("../../assets/tab3.png"),
                    text: 'BTC'
                }
            ],
            active: 1
        };
    }
    componentWillMount () {
        const { dispatch } = this.props;
        dispatch({ type: 'index_data/fetch' })
    }

    //tab title 点击
    tab_tit_onclick = (index) => {
        this.setState({
            active: index
        });
    }

    render() {
        const { tab_t_arr } = this.state;
        const { index_data: {tab_data}, dispatch } = this.props;
        
        return (
            <div className={styles.index_main} >
                <div className="conta_box clearfix" >
                    <ul className={`${styles.card_body} clearfix`} >
                        <li className={styles.card_body_ll} >
                            <div className={styles.card_body_t} >
                                <span>BTC/USDT</span>
                                <em>-3.38%</em>
                            </div>
                            <div className={styles.card_body_b} >
                                <span>6,580.00</span>
                                <em>¥ 43,033.20</em>
                            </div>
                        </li>
                        <li className={styles.card_body_lr} >
                            <div className={styles.card_body_t} >
                                <span>BTC/USDT</span>
                                <em>-3.38%</em>
                            </div>
                            <div className={styles.card_body_b} >
                                <span>6,580.00</span>
                                <em>¥ 43,033.20</em>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.tab_box}  >
                        <div className={`${styles.tab_box_t} clearfix`} >
                            <Tab_t_list {...this.state} tab_tit_onclick={this.tab_tit_onclick} dispatch={dispatch} />
                            <div className={styles.tab_box_r} >
                                
                            </div>
                        </div>
                        <div className={`${styles.tab_box_b} clearfix`} >
                            <table>
                                <thead>
                                    <tr>
                                        <th><a href="javascript:;" >交易对</a></th>
                                        <th><a href="javascript:;" >价格</a></th>
                                        <th><a href="javascript:;" >24H涨跌</a></th>
                                        <th><a href="javascript:;" >24H最高价</a></th>
                                        <th><a href="javascript:;" >24H最低价</a></th>
                                        <th><a href="javascript:;" >24H成交额</a></th>
                                    </tr>
                                </thead>
                                <Tbody tab_data={tab_data} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index_main;

