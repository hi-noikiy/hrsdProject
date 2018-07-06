import React, { Component } from 'react';
import { Layout, Card, Spin } from 'antd';
import { connect } from 'dva';
import { Link, Route } from 'dva/router';
import Login_tip from '../../components/Login_tip'
import styles from './index.less'
import './cover_style.less'

const { Header, Footer, Sider, Content } = Layout;

//先走空，再判断登录状态
const User_or_LoginTip = ({ login_status }) =>{
    if(login_status === 0) {
        return ('')
    }else if (login_status == true) {
        return ('User');
    }else {
        return (<Route path="/user" component={Login_tip} />);
    }
}

@connect(({ user, loading }) => ({
    user,
    loading
}))
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch({ type: 'user/login_status' });
        
    }
    render() {
        const { user: { login_status }, loading } = this.props;
        return (
            <div className={`${styles.User} User`} >
                <Spin spinning={loading.models.user}>
                    <User_or_LoginTip login_status={login_status} />
                </Spin>
            </div>
        );
    }
}

export default User;

// if(login_status == 0) {
//     return ('')
// }lese if (login_status == true) {
//     return ('User')
// }lese{
//     return (<Route path="/user" component={Login_tip} />)
// }