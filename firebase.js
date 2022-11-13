// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFW04ZVfoyU8p18m9oMapy1HagQh2k5E8",
  authDomain: "appnorthtour.firebaseapp.com",
  projectId: "appnorthtour",
  storageBucket: "appnorthtour.appspot.com",
  messagingSenderId: "865939370034",
  appId: "1:865939370034:web:d83283403529626b470c2b",
  measurementId: "G-V14CSTJPCR"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

    const auth = firebase.auth()
    export { auth };