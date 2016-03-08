import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import App from './components/app'
import appReducer from './reducers/appReducer'
import DevTools from './components/devTools'
//import '../styles/app.scss'


const enhancer = compose(
  DevTools.instrument()
);

const appNode = document.getElementById('app');
const store = createStore(appReducer, {}, enhancer);

if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

ReactDOM.render(<App store={store} />, appNode);
