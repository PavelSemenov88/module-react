// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAnalytics  } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyCNQEc0X0L7EiWrIbQkAIeExhu4fTnJr9A",
 authDomain: "redux-http-4f4b5.firebaseapp.com",
 databaseURL: "https://redux-http-4f4b5-default-rtdb.firebaseio.com",
 projectId: "redux-http-4f4b5",
 storageBucket: "redux-http-4f4b5.appspot.com",
 messagingSenderId:  "739478560178",
 appId: "1:739478560178:web:3d1cca63c50618bb5d58ab",
 measurementId: "G-LGREVD3CWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics  = getAnalytics(app);