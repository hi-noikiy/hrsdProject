import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Basic_layout from './layout/Basic_layout'
import Ctoc from './layout/Ctoc'
import './css/base.css'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/ctoc" component={Ctoc} />
        <Route path="/" component={Basic_layout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;


