import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBavCMKtZl0Zonm2-kqKcq3NeD5fkTUC1Y",
  authDomain: "quick-feed-4ec35.firebaseapp.com",
  projectId: "quick-feed-4ec35",
  storageBucket: "quick-feed-4ec35.appspot.com",
  messagingSenderId: "82226409664",
  appId: "1:82226409664:web:feb516b9a68558853d7d25",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

export default firebase;
