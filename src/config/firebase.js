import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDLB3KY4BWiby2Hnl7WknnaCJLtyMHRXuc",
  authDomain: "manual2020.firebaseapp.com",
  databaseURL: "https://manual2020.firebaseio.com",
  projectId: "manual2020",
  storageBucket: "manual2020.appspot.com",
  messagingSenderId: "389421878569",
  appId: "1:389421878569:web:8d4ca91f2d5910423b3b38",
  measurementId: "G-CDRHGK1Q8S",
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire