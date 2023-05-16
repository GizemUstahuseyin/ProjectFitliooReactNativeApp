import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWk2EEgQu1WPIH52ox0donm0eOAdHGImE",
    authDomain: "fitlioo-359b4.firebaseapp.com",
    projectId: "fitlioo-359b4",
    storageBucket: "fitlioo-359b4.appspot.com",
    messagingSenderId: "1007142969875",
    appId: "1:1007142969875:web:ddf09736522031d17755e6",
    measurementId: "G-7HF9PB7SJT"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };