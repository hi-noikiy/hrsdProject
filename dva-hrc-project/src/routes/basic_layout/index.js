import React, { Component } from 'react'
import { routerRedux, Route, Switch } from 'dva/router';
import Common_header from '../../components/Common_header';
import Index_main from '../../components/Index_main';
import Common_footer from '../../components/Common_footer';

import styles from './index.less';


class Basic_layout extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Common_header} />
                <Index_main />
                <Common_footer />
            </div>
        );
    }
}

export default Basic_layout;