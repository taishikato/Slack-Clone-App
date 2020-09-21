import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCHKYGEWLmlGXIl7EhyoeC2cgNRlefO2W8',
  authDomain: 'slack-clone-13.firebaseapp.com',
  databaseURL: 'https://slack-clone-13.firebaseio.com',
  projectId: 'slack-clone-13',
  storageBucket: 'slack-clone-13.appspot.com',
  messagingSenderId: '477625431836',
  appId: '1:477625431836:web:9f3e3b631308f71a64ecd9',
  measurementId: 'G-2SPEKGW9NT',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
