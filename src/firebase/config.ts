import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZSMgw08QA3XYfLiwix8YDc4vEfYuhrZo",
    authDomain: "webpack-starter-typescript.firebaseapp.com",
    projectId: "webpack-starter-typescript",
    storageBucket: "webpack-starter-typescript.appspot.com",
    messagingSenderId: "604703754501",
    appId: "1:604703754501:web:82fbf1efbfd8b1246f8f6c",
    measurementId: "G-6WNCPCTL9C"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();