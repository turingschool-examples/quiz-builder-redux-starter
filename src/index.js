import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import thunk  from 'redux-thunk'
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancers = compose(
  applyMiddleware(thunk),
  devTools
)

const store = createStore(reducers, {}, enhancers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
