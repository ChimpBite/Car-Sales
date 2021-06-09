import React from 'react';
import ReactDOM from 'react-dom';

//import store, Provider, and Reducer
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { FeaturesReducer } from './reducer/FeaturesReducer';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// Create Store
const store = createStore(
  FeaturesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');
ReactDOM.render(
  // add provider wrapper give app access to store
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
