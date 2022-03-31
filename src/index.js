import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
    domain='dev-xnoo7xo1.us.auth0.com'
    clientId='XmEOndNg6YSDGNssOHbCuJFe97TTZ6E2'
    redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
