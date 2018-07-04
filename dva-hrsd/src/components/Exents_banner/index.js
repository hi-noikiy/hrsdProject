import React, { Component } from 'react'
import { routerRedux, Route, Switch } from 'dva/router';
import { Carousel } from 'antd';
import styles from './index.less'


class Exents_banner extends Component {
    render() {
        return (
            <div>
                <div className={styles.exents_banner} >
                    <Carousel autoplay>
                        <div className={styles.img_box2} ></div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Exents_banner;