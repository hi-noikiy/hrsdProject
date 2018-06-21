import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import Basic_layout from './routes/basic_layout';

// wrapper of dynamic
// const dynamicWrapper = 


// const RouterConfig = ({ history, app}) => {
//   const notFound = dynamic({
//     app,
//     component: () => import('./routes/404')
//   });
//   const home = dynamic({
//     app,
//     component: () => import('./routes/home')
//   });
//   const homeChild = dynamic({
//     app,
//     component: () => import('./routes/child')
//   });
// return(
//     <Router history={history}>
//       <Switch>
//         <Route path='/home' exact component={home} />
//         <Route path='/home/child' exact component={homeChild} />
//         <Route path='*' exact component={notFound} />
//       </Switch>
//     </Router>
//   )


   // {
    //     path: '/',
    //     models: () => ['index'],
    //     component: () => import('./routes/basic_layout'),
    // },
    // {
    //     path: '/',
    //     models: () => ['index'],
    //     component: () => import('./components/Common_header'),
    // },
    // {
    //     path: '/',
    //     models: () => ['index'],
    //     component: () => import('./components/Common_footer'),
    // },
    // {
    //     path: '/',
    //     models: () => ['index'],
    //     component: () => import('./components/Carousel'),
    // }
// const routes = {
//     '/': {
//         component: dynamicWrapper(app, ['index'], () => import('./routes/basic_layout'))
//     }
// }

function RouterConfig({ history, app }) {
    const { ConnectedRouter } = routerRedux;
    return(
        <div>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={Basic_layout} />
                </Switch>
            </ConnectedRouter>
        </div>
    )
}

export default RouterConfig;