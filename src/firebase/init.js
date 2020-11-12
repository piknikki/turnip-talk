import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyAcalfYxpudemmNblB_1cjznnyGxA0dO7c',
  authDomain: 'turnip-talk.firebaseapp.com',
  databaseURL: 'https://turnip-talk.firebaseio.com',
  projectId: 'turnip-talk',
  storageBucket: 'turnip-talk.appspot.com',
  messagingSenderId: '676226981602',
  appId: '1:676226981602:web:eb121ccbc587e7958448bb'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
