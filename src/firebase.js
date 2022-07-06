import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBm6rIL4vuaKGGSMV5_A30sXKR2bWH634",
    authDomain: "netflix-clonev1.firebaseapp.com",
    projectId: "netflix-clonev1",
    storageBucket: "netflix-clonev1.appspot.com",
    messagingSenderId: "246862364283",
    appId: "1:246862364283:web:81110a9e5e561d34f9acde"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth= firebase.auth()

export{auth};
export default db