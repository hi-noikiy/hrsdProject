import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './index.less'

//请先登录
class Login_tip extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            timerNum: 3
        }
    }

    componentDidMount() {
        this.timer1 = setInterval(() => {
            const { timerNum } = this.state;
            this.setState({ timerNum: timerNum -1 });
            if(timerNum == 0) {
                clearInterval(this.timer1);
                this.props.history.push('login');
            }
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer1);
    }
    render() { 
        return (  
            <Card className={styles.Login_tip} style={{ width: 300 }}>
                <p>请您先登录账号</p>
                <p>{this.state.timerNum}秒后跳转到登录页面 ...</p>
            </Card>
        )
    }
}
 
export default Login_tip;