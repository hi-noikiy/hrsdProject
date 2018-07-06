import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Basic_layout from './layout/Basic_layout'
import Ctoc from './layout/Ctoc'
import User from './layout/User'
import './css/base.css'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Basic_layout} />
        <Route exact path="/fb" component={Basic_layout} />
        <Route exact path="/events" component={Basic_layout} />
        <Route exact path="/login" component={Basic_layout} />
        <Route exact path="/reg" component={Basic_layout} />
        
        <Route path="/ctoc" component={Ctoc} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;


