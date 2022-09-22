import { initializeApp  } from "firebase/app";
// import { getAnalytics  } from "firebase/analytics";
const firebaseConfig = {
 apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
 authDomain: process.env.,
 databaseURL: process.env.,
 projectId: process.env.,
 storageBucket: process.env.,
 messagingSenderId:  process.env.,
 appId: "1:739478560178:web:3d1cca63c50618bb5d58ab",
 measurementId: "G-LGREVD3CWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics  = getAnalytics(app);