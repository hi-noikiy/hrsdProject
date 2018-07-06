import React, { Component } from 'react'
import { routerRedux, Route, Switch } from 'dva/router';
import { Link } from 'dva/router';
import { connect } from 'dva';
import styles from './index.less'

//左边列表
@connect(({ common_header }) => ({
    common_header
  }))
class Ul_l_list extends Component {
    render() { 
        const { common_header: { data }, dispatch, location: { pathname }  } = this.props;
        // 根据路由的地址来确定选中的状态
        let activeNum = '';
        data.forEach((e, i) => {
            if(pathname == e.path) {
                activeNum = e.activeNum;
            }
        });
        
        return ( 
            <ul>
                {
                    data.map((e, i) => {
                        return (
                            <li 
                                className={activeNum === i ? styles.active : ''}  
                                key={i}
                            >
                                <Link to={`${e.path}`} >{e.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
         )
    }
}

const Header = ({ style, props: { location } }) => {
    return (
        <div className={style} >
            <div className="conta_box" >
                <div className={styles.header_l} >
                    <div>
                        <Link to="/">
                            <img src={require('../../assets/logo.gif')} />
                        </Link>
                    </div>
                    <Ul_l_list location={location} />
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
                    <Route exact path="/" render={(props) => {
                        return <Header props={props} style={`${styles.header} ${styles.t_header}`} />
                    }} />
                    <Route path="/fb" render={(props) => {
                        return <Header props={props} style={`${styles.header} ${styles.black_header}`} />
                    }} />
                    <Route path="/events" render={(props) => {
                        return <Header props={props} style={`${styles.header} ${styles.t_header}`} />
                    }} />
                    <Route path="/login" render={(props) => {
                        return <Header props={props} style={`${styles.header} ${styles.black_header}`} />
                    }} />
                    <Route path="/reg" render={(props) => {
                        return <Header props={props} style={`${styles.header} ${styles.black_header}`} />
                    }} />
                    
                </Switch>
                
            </div>
        );
    }
}

export default Common_header;