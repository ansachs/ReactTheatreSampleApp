import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './components/Routes'
import { createStore } from 'redux'
import movieReducers from './reducers/movieReducers'
import 'semantic-ui-css/semantic.min.css';
import './index.css'

c

ReactDOM.render( 
  <Routes store={store} />,
  document.getElementById('root'));
registerServiceWorker();
