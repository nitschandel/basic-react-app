import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as configuredStore from './store';
import configureRoutes from './route';

ReactDOM.render(
  <Provider store={configuredStore.store}>
    {configureRoutes()}
  </Provider>,
  document.getElementById('root')
);
