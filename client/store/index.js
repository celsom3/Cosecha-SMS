import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

export default function configureStore ( initialState ) {
  const logger = createLogger();
  const store = createStore( rootReducer, initialState );

  if ( module.hot ) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
