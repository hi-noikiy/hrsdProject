import React, { Component } from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import Carou from '../Carousel/index'
import styles from './index.less';

class Index_main extends Component {
    render() {
        return (
            <div className={styles.index_main} >
                <Route path="/" component={Carou} />
            </div>
        );
    }
}

export default Index_main;