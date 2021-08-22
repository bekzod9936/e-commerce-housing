import React from 'react';
import './index.css';
import Root from './root';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
