import React, { Component } from 'react';
import { Link } from 'dva/router';

import styles from './index.less';

class Common_header extends Component {
    //加载不同的css
    switch_css = (arr, path) => {
        let obj = '';
        if(path == '/'){
            return styles.index_header
        }

        arr.forEach((e, i) => {
            if( isPath(path, e.path) ) {
                obj = e.css;
            }
        });
        return obj;

        function isPath(path, str) {
            return path.indexOf(str) != -1;
        }
    }
    
    
    render() {
        let cssArr = [
            {
                path: '/login',
                css: styles.login_header
            },
            {
                path: '/register',
                css: styles.register_header
            },
        ]
        const head_css = this.switch_css(cssArr, this.props.location.pathname);
        return (
            <div className={head_css} >
                <div className='container' >
                    <div className={styles.header_l} >
                        <a href="/" >
                            <img src={require('../../assets/logo.gif')} />
                        </a>
                        <ul>
                            <li>
                                <Link to="/" >首页</Link>
                            </li>
                            <li>
                                <Link to="/" >法币交易</Link>
                            </li>
                            <li>
                                <Link to="/" >币币交易</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className={styles.header_r} >
                        <li>
                            <Link to="/" >登录</Link>
                        </li>
                        <li><span>|</span></li>
                        <li>
                            <Link to="/" >注册</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Common_header;