/* eslint-disable func-style */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagasMIddleWare from 'redux-saga';
import rootReducer from '../redux/reducers';

export default (function(initState) {
  const saga = createSagasMIddleWare();

  return {
    ...createStore(
      rootReducer,
      initState,

      composeWithDevTools(applyMiddleware(saga)),
    ),
    run: saga.run,
  };
})({});
