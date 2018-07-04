import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import { Link } from 'dva/router';
import FontAwesome from 'react-fontawesome';
import styles from './index.less'

const { Header } = Layout;



@connect(({  }) => ({
    
}))
class Ctoc_head extends Component {
    render() {
        return (
            <Header className={styles.head} >
                <div className={styles.head_left} >
                    <Link className={styles.logo} to="/" >
                        <img src={require("../../assets/logo.gif")} />
                    </Link>
                    <ul className={styles.link_list} >
                        <li className={styles.list_head} >
                            <span>ETH/BTC</span>
                            <FontAwesome name="caret-down" style={{ fontSsize: '16px' }}/>
                        </li>
                        <li className={styles.list} >
                            <p>最新价</p>
                            <p>0.073950</p>
                        </li>
                        <li className={styles.list} >
                            <p>最新价</p>
                            <p>0.073950</p>
                        </li>
                        <li className={styles.list} >
                            <p>最新价</p>
                            <p>0.07395</p>
                        </li>
                    </ul>
                </div>
                <ul className={styles.head_right} >
                    <li>
                        <Link to="/login">登录</Link>
                        <span>|</span>
                        <Link to="/reg">注册</Link>
                    </li>
                </ul>
            </Header>
        );
    }
}

export default Ctoc_head;