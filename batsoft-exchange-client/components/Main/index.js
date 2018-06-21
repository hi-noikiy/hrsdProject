import React, { Component } from 'react'
import { routerRedux, Route, Switch } from 'dva/router';
import Index_main from '../Index_main'
import Fb_main from '../Fb_main'
import LoginReg_main from '../LoginReg_main'
import Events_main from '../Events_main'
import styles from './index.less'

class Main extends Component {
    render() {
        return (
            <div className={''} >
                <Switch>
                    <Route exact path="/" component={Index_main} />
                    <Route path="/fb" component={Fb_main} />
                    <Route path="/events" component={Events_main} />
                    <Route path="/login" component={LoginReg_main} />
                    <Route path="/reg" component={LoginReg_main} />
                </Switch>
            </div>
        );
    }
}

export default Main;