import React, { Component } from 'react'
import { connect } from 'dva';
import { Link, Route } from 'dva/router';
import LoginReg_head from '../LoginReg_head'
import styles from './index.less'

@connect(({ user, loginReg, loading }) => ({
    user,
    loading,
    loginReg
  }))
class Login_main extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        }
    }
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch({ type: 'user/login_status' });
    }

    _toPath = () => {
        const { history, user: { login_status }, dispatch } = this.props;
        dispatch({ type: 'loginReg/password_true' });
        //获取验证码状态
        dispatch({ type: 'loginReg/verification_status' });
        //获取登录状态
        dispatch({ type: 'user/login_status' });
    }

    render() { 
        const {  user: { login_status }, loginReg: { verify_code }, dispatch, loading, history } = this.props;
        if(login_status) {
            history.push('/user');
        }
        console.log(verify_code);
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
                                this._toPath();
                            }}
                        >登录</a>
                        {verify_code != true ? <span style={{ color: 'red' }}>用户名或密码错误</span> : ''}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Login_main;