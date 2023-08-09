import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { pokemonsReducers } from './reducers/pokemons.jsx';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';

const store = legacy_createStore(pokemonsReducers)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
