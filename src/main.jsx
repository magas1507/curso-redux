import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { pokemonsReducers } from './reducers/pokemons.jsx';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { logger } from './middlewares/index.jsx';
import thunk from 'redux-thunk';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = legacy_createStore(pokemonsReducers , composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
