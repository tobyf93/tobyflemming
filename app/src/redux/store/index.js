import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const applyStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(state) {
  const store = applyStoreWithMiddleware(reducer, state);
  return store;
}
