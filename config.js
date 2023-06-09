import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDZo5TBIFSW-iqyTzxI6rzbZRju2aImcDo",
  authDomain: "bike-66535.firebaseapp.com",
  projectId: "bike-66535",
  storageBucket: "bike-66535.appspot.com",
  messagingSenderId: "555551204794",
  appId: "1:555551204794:web:5dc0d4e322632749432983"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
