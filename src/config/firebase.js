import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCWh51WqzOx_EcryxpnXUv2EsT-Fw7Tszo",
    authDomain: "disneyplus-e86d7.firebaseapp.com",
    projectId: "disneyplus-e86d7",
    storageBucket: "disneyplus-e86d7.appspot.com",
    messagingSenderId: "289891573875",
    appId: "1:289891573875:web:efc9930da8ee8cd1428a06",
    measurementId: "G-Y5LPHWS1PX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
