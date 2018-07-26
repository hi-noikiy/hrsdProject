import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './css/base.css';
import './index.css';

import Basic_layout from './layout/Basic_layout'
import Iindex from './routes/Iindex.js'
import C2c from './routes/C2c.js'
import Events from './routes/Events.js'

const A = () => <h1>A</h1>

const routes = [
  {
    path: '/',
    exact: true,
    component: Basic_layout,
    key: 'basic_layout'
  }, 
  {
    path: '/c2c',
    component: Basic_layout,
    key: 'basic_layout',
    routes: [
      {
        path: '/c2c/a',
        component: A
      }
    ]
  }, 
  {
    path: '/events',
    component: Basic_layout,
    key: 'basic_layout'
  },
]




class App extends Component {
  render() {
    return (
      <Router>
        {renderRoutes(routes)}
      </Router>
    );
  }
}

export default App;
