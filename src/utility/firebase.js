import firebase from 'firebase/app'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyCO6C9gL-ASnr9bBfPCcjp0whIrMnEdoS0",
    authDomain: "sjediba.firebaseapp.com",
    databaseURL: "https://sjediba.firebaseio.com",
    projectId: "sjediba",
    storageBucket: "sjediba.appspot.com",
    messagingSenderId: "852633878466",
    appId: "1:852633878466:web:f4c6278f7fbb061a"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage,
    firebase as default
}