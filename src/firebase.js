import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqZiOMaYbhYKtH5vYZgrRkSQs6I6TXeyc",
  authDomain: "netflix-7664d.firebaseapp.com",
  projectId: "netflix-7664d",
  storageBucket: "netflix-7664d.appspot.com",
  messagingSenderId: "601917773693",
  appId: "1:601917773693:web:6ffc257b93ba688c331e14"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;