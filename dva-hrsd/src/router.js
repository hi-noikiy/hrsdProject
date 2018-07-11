import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import './css/base.css';

//按需加载
function dynamicWrapper (app, models, component) {
  return dynamic({
      app,
      models: () => models.map(m => import(`./models/${m}.js`)),
      component,
  })
}



function RouterConfig({ history, app }) {
  const Basic_layout = dynamicWrapper(app, ['index_tab','common_header'], () => import('./layout/Basic_layout'));
  const Ctoc = dynamicWrapper(app, ['ctoc'], () => import('./layout/Ctoc'));
  const User = dynamicWrapper(app, ['user'], () => import('./layout/User'));
  
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





