import React, { Component } from 'react'
import { routerRedux, Route, Switch } from 'dva/router';
import { Link } from 'dva/router';
import styles from './index.less'

const Header = ({ style }) => {
    return (
        <div className={style} >
            <div className="conta_box" >
                <div className={styles.header_l} >
                    <div>
                        <Link to="/">
                            <img src={require('../../assets/logo.gif')} />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/" >首页1</Link>
                        </li>
                        <li>
                            <Link to="/fb" >法币交易</Link>
                        </li>
                        <li>
                            <Link to="/ctoc" >币币交易</Link>
                        </li>
                        <li>
                            <Link to="/events" >活动</Link>
                        </li>
                    </ul>
                </div>

                <ul className={styles.header_r} >
                    <li>
                        <Link to="/login" >登录</Link>
                    </li>
                    <li><span>|</span></li>
                    <li>
                        <Link to="/reg" >注册</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

class Common_header extends Component {
    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => {
                        return <Header style={`${styles.header} ${styles.t_header}`} />
                    }} />
                    <Route path="/fb" render={() => {
                        return <Header style={`${styles.header} ${styles.black_header}`} />
                    }} />
                    <Route path="/events" render={() => {
                        return <Header style={`${styles.header} ${styles.t_header}`} />
                    }} />
                    <Route path="/login" render={() => {
                        return <Header style={`${styles.header} ${styles.black_header}`} />
                    }} />
                    <Route path="/reg" render={() => {
                        return <Header style={`${styles.header} ${styles.black_header}`} />
                    }} />
                    
                </Switch>
                
            </div>
        );
    }
}

export default Common_header;