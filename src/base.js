import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBVzrhN8K9Rpc8N_O8lt9p3VAtG8Vf6lcw',
  authDomain: 'very-hot-burgers-55603.firebaseapp.com',
  databaseURL: 'https://very-hot-burgers-55603-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
