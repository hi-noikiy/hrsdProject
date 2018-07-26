import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
//热更新
if (module.hot) {module.hot.accept();}
