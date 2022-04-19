import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrK_1-ukF5MXHJY7Gm90TpznpKFV2a7bU",
    authDomain: "gfgfirestore-9a665.firebaseapp.com",
    projectId: "gfgfirestore-9a665",
    storageBucket: "gfgfirestore-9a665.appspot.com",
    messagingSenderId: "686130719818",
    appId: "1:686130719818:web:ee301e04a1608a91798ab3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
