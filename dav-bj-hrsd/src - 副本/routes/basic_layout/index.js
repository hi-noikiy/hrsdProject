import React, { Component } from 'react'
import { routerRedux, Route, Switch } from 'dva/router';
import { Carousel } from 'antd';
import Common_header from '../../components/Common_header';
import Carou from '../../components/Carousel'
import Index_main from '../../components/Index_main';
import Common_footer from '../../components/Common_footer';

import styles from './index.less';


class Basic_layout extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Common_header} />
                <Route path="/" component={Carou} />
                <Route path="/" component={Index_main} />
                <Route path="/" component={Common_footer} />
            </div>
        );
    }
}

export default Basic_layout;