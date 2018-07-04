import dva from 'dva';
import browserHistory from 'history/createBrowserHistory';
import './index.css';

// 1. Initialize
const app = dva({
    history: browserHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/common_header').default);
app.model(require('./models/index_tab').default);
app.model(require('./models/Floa_window').default);
app.model(require('./models/LoginReg_main').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
