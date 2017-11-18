/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore.dev';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';
import { loadProducts } from './actions/productActions';
import routes from './routes';
import './styles/styles.css'; //webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


/* create store instance from configureStore */
const store = configureStore();
 store.dispatch(loadCourses());
 store.dispatch(loadProducts());

render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('app')
);

