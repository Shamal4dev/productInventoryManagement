import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './script/redux';
import { App } from './App';
import { history } from './script/helper';

function Root() {
  return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </Provider>
  );
}

export default Root;
