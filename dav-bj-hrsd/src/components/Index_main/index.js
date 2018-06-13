import React, { Component } from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import FontAwesome from 'react-fontawesome';
import { Table, Icon, Divider } from 'antd';
import styles from './index.less';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
        <Divider type="vertical" />
        <a href="javascript:;" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];

const Tab_t_list = ({ tab_t_arr, active, tab_tit_onclick }) => {
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
                        <li className={active_css} key={i} onClick={()=>{ tab_tit_onclick(i) }} >
                            {icon}
                            <span>{e.text}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

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

    //tab title 点击
    tab_tit_onclick = (index) => {
        this.setState({
            active: index
        });
    }

    render() {
        const { tab_t_arr } = this.state;
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
                        <div className={`${styles.tab_box_t} clearfix`}  >
                            <Tab_t_list {...this.state} tab_tit_onclick={this.tab_tit_onclick} />
                            <div className={styles.tab_box_r} >
                                <Table columns={columns} dataSource={data} pagination={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index_main;