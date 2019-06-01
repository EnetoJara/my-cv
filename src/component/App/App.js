import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import Wrapper from '../wrapper/Wrapper';

const App = props => {
  const { store } = props;

  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};

export default hot(App);
