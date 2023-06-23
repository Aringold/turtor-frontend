import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { store } from "./redux/storeConfig/store";

import Preloader from './components/layouts/preloader';
import Router from './Router';

const App = () => {
  return (
    <Router />
  );
};

ReactDOM.render( 
  <Provider store={store}>
      <Suspense fallback={<Preloader />}>
        <App />
      </Suspense>
    </Provider>,
  document.getElementById('app'));
