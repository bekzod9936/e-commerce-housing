import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Root from './root';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
