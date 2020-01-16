import firebase from 'firebase'
import  'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCTuX5SGcQT8g5CM5-SVIl3HCszkk0z390",
    authDomain: "tutor-4cfe5.firebaseapp.com",
    databaseURL: "https://tutor-4cfe5.firebaseio.com",
    projectId: "tutor-4cfe5",
    storageBucket: "tutor-4cfe5.appspot.com",
    messagingSenderId: "905264537234",
    appId: "1:905264537234:web:53c6757b4e29282a45504b",
    measurementId: "G-3B2CTWT5B4"
  }
export const fire = firebase.initializeApp(firebaseConfig);

 export const db = firebase.firestore()
 export const auth  =  firebase.auth()