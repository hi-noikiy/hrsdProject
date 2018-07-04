import React, { Component } from 'react'
import { connect } from 'dva';
import { Link, Route } from 'dva/router';
import LoginReg_head from '../LoginReg_head'
import styles from './index.less'

class Login_main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    _toPath = (history) => {
        history.push('/');
    }

    render() { 
        const { history } = this.props;
        console.log(this.props)
        return (  
            <div className={styles.Login_main}>
                <Route path="/login" component={LoginReg_head} />
                <div className={styles.item}>
                    <div className={styles.user}>
                        <input type="text" placeholder="账号" />
                    </div>
                    <div>
                        <input type="text" placeholder="密码" />
                    </div>
                    <p className={styles.forget_password}>
                        <Link to="/forget_password">忘记密码？</Link>
                    </p>
                    <div className={styles.btn}>
                        <a href="javascript:;"
                            onClick={() => {
                                this._toPath(history);
                            }}
                        >登录</a>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Login_main;