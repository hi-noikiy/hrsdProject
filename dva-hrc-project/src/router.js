import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import Basic_layout from './routes/basic_layout'

function RouterConfig({ history, app }) {
    const { ConnectedRouter } = routerRedux;
    return(
        <div>
            <ConnectedRouter history={history}>
                <Route path="/" component={Basic_layout} />
            </ConnectedRouter>
            
        </div>
    )
}

export default RouterConfig;