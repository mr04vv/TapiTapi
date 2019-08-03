import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Top from 'pages/Top';
import configureStore from 'reduxes';
import reactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const App = () => (

  <Switch>
    <Route exact path="" component={Top} />
  </Switch>

);

// React entry point.
reactDom.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.register();
