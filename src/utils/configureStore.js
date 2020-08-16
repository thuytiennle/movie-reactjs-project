import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

/**
 * Check if environment for DEV (in case project had desployed) and global window is object to use DEVTOOLS
 */

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();
// const loggerMiddleware = createLogger();

const configureStore = () => {
  const middlewares = [
    // List of middlewares
    sagaMiddleware,
    // loggerMiddleware,
  ];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  // Hàm run dùng để theo dõi action được dispatch thì saga sẽ chạy
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
