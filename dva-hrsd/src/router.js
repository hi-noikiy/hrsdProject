import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { renderRoutes } from 'react-router-config'
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



// const routes = [
//   { component: Root,
//     routes: [
//       { path: '/',
//         exact: true,
//         component: Home
//       },
//       { path: '/child/:id',
//         component: Child,
//         routes: [
//           { path: '/child/:id/grand-child',
//             component: GrandChild
//           }
//         ]
//       }
//     ]
//   }
// ]

const H1 = () => <h1>h1</h1>

function RouterConfig({ history, app }) {
  const Basic_layout = dynamicWrapper(app, ['index_tab','common_header'], () => import('./layout/Basic_layout'));
  const Ctoc = dynamicWrapper(app, ['ctoc'], () => import('./layout/Ctoc'));
  const User = dynamicWrapper(app, ['user'], () => import('./layout/User'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Basic_layout,
  }, 
  {
    path: '/fb',
    component: Basic_layout,
  },
  {
    path: '/events',
    component: Basic_layout,
  },
  {
    path: '/login',
    component: Basic_layout,
  },
  {
    path: '/reg',
    component: Basic_layout,
  },
  { path: '/ctoc',
    component: Ctoc
  },
  { path: '/user',
    component: User
  },
]



  // const routes = [
  //   {
  //     path: '/',
  //     exact: true,
  //     component: Basic_layout,
  //   }, 
  //   {
  //     path: '/fb',
  //     exact: true,
  //     component: Basic_layout,
  //   },
  //   {
  //     path: '/events',
  //     exact: true,
  //     component: Basic_layout,
  //   },
  //   {
  //     path: '/login',
  //     exact: true,
  //     component: Basic_layout,
  //   },
  //   {
  //     path: '/reg',
  //     exact: true,
  //     component: Basic_layout,
  //   },
  //   { path: '/ctoc',
  //     component: Ctoc
  //   },
  //   { path: '/user',
  //     component: User
  //   },
  // ]

  

  console.log(renderRoutes);
  return (
    <Router history={history}>
      
      <Switch>
      {/* <Route path="/ctoc" component={Ctoc} /> */}
     
        {renderRoutes(routes)}

        {/* <Route exact path="/" component={Basic_layout} />
        <Route path="/fb" component={Basic_layout} /> */}

        {/* <Route exact path="/events" component={Basic_layout} /> */}
        {/* <Route exact path="/login" component={Basic_layout} /> */}
        {/* <Route exact path="/reg" component={Basic_layout} /> */}
        
        
        {/* <Route path="/user" component={User} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;