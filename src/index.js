import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './store/reducers';
import App from './components/App';
import rootSaga from './store/sagas';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore( // this takes reducer as an arg
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger)),// here we're applying sagaMiddleware
);

sagaMiddleware.run(rootSaga); // here we're running sagaMiddleware with rootSaga as an arg
// root saga is which contains all the action watcher

render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept(App);
}

