import React, { Component } from 'react'
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.less'

@connect(({ loginReg }) => ({
    loginReg
}))
class LoginReg_head extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            arr: [
                {
                    path: '/login',
                    text: '登录',
                    activeNum: 0
                },
                {
                    path: '/reg',
                    text: '注册',
                    activeNum: 1
                }
            ],
        }
    }
    render() { 
        const { arr } = this.state;
        console.log(this.props)
        const { location: { pathname } } = this.props;
        // 根据路由的地址来确定选中的状态
        let activeNum = '';
        arr.forEach((e, i) => {
            if(pathname == e.path) {
                activeNum = e.activeNum;
            }
        });

        return (  
            <div className={styles.head}>
                {
                    arr.map((e, i) => {
                        return (
                            <Link 
                                key={i}
                                to={e.path} 
                                className={activeNum == i ? styles.active : ''}
                            >
                                {e.text}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default LoginReg_head;