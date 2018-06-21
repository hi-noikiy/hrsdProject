import React, { Component } from 'react'
import { routerRedux, Route, Switch } from 'dva/router';
import { Carousel } from 'antd';
import styles from './index.less'

const Carous = () => {
    return (
        <div className={styles.caro} >
            <Carousel autoplay>
                <div className={styles.img_box1} ></div>
                <div className={styles.img_box2} ></div>
            </Carousel>
        </div>
    )
}

class Carou extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Carous} />
                    <Route path="/events" component={Carous} />
                </Switch>
            </div>
        );
    }
}

export default Carou;