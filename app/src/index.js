import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PhotoSwipe from 'photoswipe';
import configureStore from './redux/store';
import Main from './components/Main';

const targetEl = document.getElementById('app');
const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Main />
  </Provider>
), targetEl);
