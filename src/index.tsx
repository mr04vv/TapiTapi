import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import DetailMenu from 'pages/DetailMenu';
import Notification from 'pages/Notification';
import OrderComplete from 'pages/OrderComplete';
import PaymentComplete from 'pages/PaymentComplete';
import MenuList from 'pages/MenuList';
import configureStore from 'reduxes';
import reactDom from 'react-dom';
import * as firebase from 'firebase';
import Confirm from 'pages/Confirm';
import * as serviceWorker from './serviceWorker';

export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();

const firebaseConfig = {
  apiKey: 'AIzaSyAMflWWyJGIjb_1AS6OnrIBKuQcm-ZpwlI',
  authDomain: 'tapitapi-f601b.firebaseapp.com',
  databaseURL: 'https://tapitapi-f601b.firebaseio.com',
  projectId: 'tapitapi-f601b',
  storageBucket: '',
  messagingSenderId: '779676974115',
  appId: '1:779676974115:web:64b3250346ff2c64',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const store = configureStore();

const App = () => (

  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/detail" component={DetailMenu} />
    <Route exact path="/notification" component={Notification} />
    <Route exact path="/ordered" component={OrderComplete} />
    <Route exact path="/paid" component={PaymentComplete} />
    <Route exact path="/menus" component={MenuList} />
    <Route exact path="/confirm" component={Confirm} />
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
