import React, { Component } from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import { Tabs, Button, Input, Slider } from 'antd';
import styles from './index.less'
import './cover_style.less'

const TabPane = Tabs.TabPane;
const operations = <Link to="/">费率</Link>;

const marks = {
    0: '0%',
    25: '',
    50: '',
    75: '',
    100: {
      style: {
        // color: '#f50',
      },
      label: <strong>100%</strong>,
    },
};

const Tabs_form_item = ({ 
    text1, 
    text2, 
    btnText, 
    price, 
    quantity, 
    data_type, 
    data_mark,
    _input_onChange, 
}) => {
    return (
        <div className={styles.form_item}>
            <div className={styles.title}>
                <em>{text1}</em>
                <span>
                    可用
                    <i> - {text2}</i>
                </span>
            </div>
            <div className={styles.input}>
                <span>价格：</span>
                <Input 
                    value={price} 
                    data_type={data_type} 
                    input_type={'price'} 
                    data_mark={data_mark}
                    onChange={_input_onChange} 
                />
                <i>BTC</i>
            </div>
            <div className={styles.input}>
                <span>数量：</span>
                <Input 
                    value={quantity} 
                    data_type={data_type} 
                    input_type={'quantity'} 
                    data_mark={data_mark}
                    onChange={_input_onChange} 
                />
                <i>ETH</i>
            </div>
            <div className={`${styles.input} ${styles.slider_box}`}>
                <span>比例：</span>
                <div className={styles.slider}>
                    <Slider marks={marks} defaultValue={0} />
                </div>
            </div>
            
            <div className={`${styles.input} ${styles.proportion}`}>
                <span>比例：</span>
                <em>0.000000 BTC</em>
            </div>
            <div className={styles.submit}>
                <input 
                    className={ btnText === '卖出' ? styles.bg_color2 : styles.bg_color1} 
                    type="submit" value={btnText}
                    onClick={() => {console.log(123)}}
                />
            </div>
        </div>
    )
}


@connect(({ ctoc }) => ({
    ctoc,
}))
class Buy_sell extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: {
                buy_title: {
                    data_type: 'buy_data',
                    text1: '买入ETH',
                    text2: 'BTC',
                    btnText: '买入',
                },
                sell_title: {
                    data_type: 'sell_data',
                    text1: '卖出ETH',
                    text2: 'ETH',
                    btnText: '卖出',
                }
            },
            buy_data: {
                price: 0.072053,
                quantity: ''
            },
            sell_data: {
                price: '0.072052',
                quantity: ''
            },
        }
    }

    //input改变
    _input_onChange = (ev) => {
        const { dispatch } = this.props;
        const { target: { value } } = ev;
        const type_data = ev.target.getAttribute("data_type");
        const input_type = ev.target.getAttribute("input_type");
        const data_mark = ev.target.getAttribute("data_mark");
        
        console.log(this.props);
        dispatch({
            type: 'ctoc/inputChange',
            payload: {
                data_mark,
                type_data,
                input_type,
                value
            }
        });
    }

    render() {
        const { title: { buy_title, sell_title } }  = this.state;
        const { ctoc:{ Limit_price, Market_price } } = this.props;
        console.log(this.props);
        return (
            <div className={`${styles.ctoc_buy_sell} ctoc_buy_sell`}>
                <Tabs tabBarExtraContent={operations}>

                    <TabPane tab="限价" key="1">
                        <div className={styles.form_container}>
                            <Tabs_form_item 
                                {...buy_title}
                                {...Limit_price.buy_data} 
                                data_mark={Limit_price.data_mark}
                                _input_onChange={this._input_onChange} 
                            />

                            <Tabs_form_item 
                                {...sell_title}
                                {...Limit_price.sell_data} 
                                data_mark={Limit_price.data_mark}
                                _input_onChange={this._input_onChange}  
                            />
                        </div>
                    </TabPane>

                    {/* <TabPane tab="市价" key="2">
                        <div className={styles.form_container}>
                            <Tabs_form_item 
                                {...buy_title}
                                {...Market_price.buy_data} 
                                data_mark={Market_price.data_mark}
                                _input_onChange={this._input_onChange} 
                            />

                            <Tabs_form_item 
                                {...sell_title}
                                {...Market_price.sell_data} 
                                data_mark={Market_price.data_mark}
                                _input_onChange={this._input_onChange}  
                            />
                        </div>
                    </TabPane> */}

                </Tabs>
            </div>
          )
    }
}
 
export default Buy_sell;