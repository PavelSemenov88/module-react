import { initializeApp  } from "firebase/app";
// import { getAnalytics  } from "firebase/analytics";
const firebaseConfig = {
 apiKey: process.env.REA,
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
// const analytics  = getAnalytics(app);