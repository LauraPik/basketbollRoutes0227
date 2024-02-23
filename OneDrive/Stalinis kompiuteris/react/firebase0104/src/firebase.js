import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9WxztME5w6BY9n5YzRtCTEWJoGG-HGfU",
  authDomain: "js-timetable-time.firebaseapp.com",
  projectId: "js-timetable-time",
  storageBucket: "js-timetable-time.appspot.com",
  messagingSenderId: "46070780548",
  appId: "1:46070780548:web:60c9fc9af5b1612cc828d1",
  measurementId: "G-ZL4TFC9ZKJ"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default firebase

