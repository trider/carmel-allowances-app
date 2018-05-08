import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './lib/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
