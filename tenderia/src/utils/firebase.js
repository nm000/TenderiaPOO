import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCoQxMy9l1MZlR1S0JEtWUbphQXZwLxp0s",
    authDomain: "storemanager-298be.firebaseapp.com",
    databaseURL: "https://storemanager-298be-default-rtdb.firebaseio.com",
    projectId: "storemanager-298be",
    storageBucket: "storemanager-298be.appspot.com",
    messagingSenderId: "368275310388",
    appId: "1:368275310388:web:ced458b108fc86ff16c761",
    measurementId: "G-T8PVGJ7VQ2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;