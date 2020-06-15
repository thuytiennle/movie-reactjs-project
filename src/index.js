import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './utils/configureStore';

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// End of bootstrap

// Import Swipper
import 'swiper/css/swiper.css';
// End of Swipper

// Import video modal
import '../node_modules/react-modal-video/scss/modal-video.scss';
// End of video modal

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
