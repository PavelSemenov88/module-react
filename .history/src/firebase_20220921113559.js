import { initializeApp  } from "firebase/app";
// import { getAnalytics  } from "firebase/analytics";
const firebaseConfig = {
 apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
 authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
 databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
 projectId: process.env.REACT_APP_FIREBASE_PROJECT_IT,
 storageBucket: process.env.,
 messagingSenderId:  process.env.,
 appId: process.env.,
 measurementId: process.env.,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics  = getAnalytics(app);