// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyABQ0w2SalG3EMYODrBQlGabr4ah3xoTk4",
  authDomain: "kmuhan-recommend-project.firebaseapp.com",
  projectId: "kmuhan-recommend-project",
  storageBucket: "kmuhan-recommend-project.appspot.com",
  messagingSenderId: "695009401688",
  appId: "1:695009401688:web:5dbff0ac5e42090723e32d",
  measurementId: "G-0BYCMSZQ72"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase