import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.jsx';

import { store } from './app/store';
import { Provider } from 'react-redux';

import * as themes from './features/theme/schema.json';
import { setToLS } from './features/local-storage/utils';

setToLS('all-themes', themes.default);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
