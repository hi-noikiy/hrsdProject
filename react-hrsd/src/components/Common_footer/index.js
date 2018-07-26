import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { Link } from 'dva/router';
import styles from './index.less'

class Common_footer extends Component {
    render() {
        return (
            <div className={styles.common_footer} >
                <div className="conta_box" >
                    <div className={styles.c_footer_t} >
                        <div className={styles.c_footer_t_l} >
                            <dl>
                                <dt>关于我们</dt>
                                <dd><Link to="#">公司团队</Link></dd>
                                <dd><Link to="#">核心特点</Link></dd>
                            </dl>
                            <dl>
                                <dt>法律法规</dt>
                                <dd><Link to="#">法律法规</Link></dd>
                                <dd><Link to="#">隐私政策</Link></dd>
                            </dl>
                            <dl>
                                <dt>客户服务</dt>
                                <dd><Link to="#">联系我们</Link></dd>
                                <dd><Link to="#">费率说明</Link></dd>
                            </dl>
                        </div>
                        <div className={styles.c_footer_t_r} >
                            <Link to="#">
                                <FontAwesome name="apple" className={styles.c_footer_t_icon} />
                                <span>AppStore 下载</span>
                            </Link>
                            <Link to="#">
                                <FontAwesome name="android" className={styles.c_footer_t_icon} />
                                <span>Android 下载</span>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className={styles.c_footer_b} >
                    <div className="conta_box" >
                        <p>©2014-2018 wanshare.com. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Common_footer;