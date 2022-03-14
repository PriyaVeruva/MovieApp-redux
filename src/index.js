import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './stores/configureStore';

const store = configureStore()
//console.log(store)
//console.log(store.getState())
store.subscribe(() => {
  console.log('updated state', store.getState())
  //localStorage.setItem('movieList', JSON.stringify(store.getState()))
})
ReactDOM.render(<Provider store={store}><App /></Provider>
  , document.getElementById('root'));


