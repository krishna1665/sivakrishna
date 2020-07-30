import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import { createStore, compose, applyMiddleware } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './App';
import rootReducer from './reducers'
import './index.css'

const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const tempstore = createStore(persistedReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={tempstore}>
    <App />
  </Provider>,
  document.getElementById('root')
);