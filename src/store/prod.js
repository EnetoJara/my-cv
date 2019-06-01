/* eslint-disable func-style */
import { applyMiddleware, createStore } from 'redux';
import createSagasMIddleWare from 'redux-saga';
import rootReducer from '../redux/reducers';

export default (function(initState) {
  const saga = createSagasMIddleWare();

  return {
    ...createStore(rootReducer, initState, applyMiddleware(saga)),
    run: saga.run,
  };
})({});
