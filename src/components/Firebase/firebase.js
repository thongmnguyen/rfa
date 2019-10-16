import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBBCR1EKFZYbqxNq50NFhXz-sulnuySFl0",
    authDomain: "rjfa-2c310.firebaseapp.com",
    databaseURL: "https://rjfa-2c310.firebaseio.com",
    projectId: "rjfa-2c310",
    storageBucket: "rjfa-2c310.appspot.com",
    messagingSenderId: "661494023452",
    appId: "1:661494023452:web:a77cf5d9d68c736b6c66d9",
    measurementId: "G-93W0T9F8DQ"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref("users");
}

export default Firebase;
