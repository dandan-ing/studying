import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MainRoute from './route/MainRoute';

ReactDOM.render(<MainRoute />, document.getElementById('root'));
registerServiceWorker();
