/* eslint-disable no-alert */
/* eslint-disable no-console */
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from 'reduxes';
import reactDom from 'react-dom';
import * as firebase from 'firebase';
import 'firebase/firestore';
import GeoSearch from 'pages/GeoSearch';
import DetailMenu from 'pages/DetailMenu';
import Notification from 'pages/Notification';
import OrderComplete from 'pages/OrderComplete';
import PaymentComplete from 'pages/PaymentComplete';
import MenuList from 'pages/MenuList';
import Confirm from 'pages/Confirm';
import History from 'pages/History';
import BottomFooter from 'components/BottomFooter';
import Management from 'pages/Management';
import QrCodeReader from 'components/QrReader';
import AccountMenu from 'pages/AccountMenu';
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


let messaging: firebase.messaging.Messaging | null = null;
if (firebase.messaging.isSupported()) {
  messaging = firebase.messaging();
  // messaging.usePublicVapidKey('{yourkey');
  messaging.requestPermission()
    .then(() => console.log('granted'))
    .catch(e => console.log(e));

  messaging.requestPermission()
    .then(() => messaging!.getToken())
    .then(async (token) => {
      console.log(token);
      const db = firebase.firestore();
      await db.collection('users').doc().set({ token });
      messaging!.onMessage(payload => alert(JSON.stringify(payload.body)));
    })
    .catch(e => console.log(e));
}


firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const store = configureStore();

const App = () => (
  <Switch>
    <Route exact path="/" component={GeoSearch} />
    <Route exact path="/geoSearch" component={GeoSearch} />
    <Route exact path="/notification" component={Notification} />
    <Route exact path="/ordered/:item" component={OrderComplete} />
    <Route exact path="/paid/:orderId" component={PaymentComplete} />
    <Route exact path="/menus/:storeId" component={MenuList} />
    <Route exact path="/menus/:storeId/detail" component={DetailMenu} />
    <Route exact path="/menus/:storeId/confirm" component={Confirm} />
    <Route exact path="/notif" component={Notification} />
    <Route exact path="/histories" component={History} />
    <Route exact path="/management/:storeId" component={Management} />
    <Route exact path="/qr/:storeId" component={QrCodeReader} />
    <Route exact path="/accounts" component={AccountMenu} />
  </Switch>
);

// React entry point.
reactDom.render(
  <Provider store={store}>
    <Router>
      <App />
      <BottomFooter />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.register();
