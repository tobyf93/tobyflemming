import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './redux/store';
import Main from './components/Main';
import Feed from './components/Feed';
import Buy from './components/Buy';
import './assets/stylesheets/main.css';

const targetEl = document.getElementById('app');
const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Feed} />
        <Route path="buy" component={Buy} />
      </Route>
    </Router>
  </Provider>
), targetEl);
