import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import Basic_layout from './routes/basic_layout';
import Common_header from './components/Common_header'


function RouterConfig({ history, app }) {
    const { ConnectedRouter } = routerRedux;
    return(
        <div>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" render={() => <Basic_layout />} >
                        <Route path="/" component={Common_header} />
                    </Route>
                </Switch>
            </ConnectedRouter>
        </div>
    )
}

export default RouterConfig;