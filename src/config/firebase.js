import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyD_05almMajMdDK7Q42ohobBKIGczsAZNE",
  authDomain: "scheduler-a5161.firebaseapp.com",
  databaseURL: "https://scheduler-a5161.firebaseio.com",
  projectId: "scheduler-a5161",
  storageBucket: "scheduler-a5161.appspot.com",
  messagingSenderId: "180734875364",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 