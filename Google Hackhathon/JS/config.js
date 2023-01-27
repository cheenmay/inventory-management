//import { create } from 'ipfs-http-client';
const firebase=require('firebase')

const ipfs = create({
    protocol: 'https',
    host: 'ipfs.infura.io',
    port: 5001,
    apiPath: 'api/v0',
    // url: 'http://ipfs.infura.io:5001/api/v0/',
    headers: {
      authorization: auth,
    },
  });

const firebaseConfig = {
    apiKey: "AIzaSyDvZ5HLBFCD6v1m-dBordg3n1u_Lxx_XKc",
    authDomain: "inventory-management-15895.firebaseapp.com",
    projectId: "inventory-management-15895",
    storageBucket: "inventory-management-15895.appspot.com",
    messagingSenderId: "442994921155",
    appId: "1:442994921155:web:96f821356cafc2fdd41c76",
    measurementId: "G-NZVDR63BNK"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const User = db.collection("Users");
  module.exports = User; 