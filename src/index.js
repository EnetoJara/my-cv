import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { App } from './component/App';
import * as serviceWorker from './serviceWorker';
import Store from './store';
import './styles/index.scss';

(function() {
  return Store.then(res => {
    const { log } = console;
    log('res', res);
    render(<App store={res} />, document.getElementById('root'));
    serviceWorker.unregister();
  }).catch(error => {
    const { log } = console;
    log('error', error);
  });
})();
