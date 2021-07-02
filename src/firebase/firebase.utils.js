import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB78T6wtN9XTFlXUJB5Ckg_4Cp-NZ4uBuI",
  authDomain: "fistfightcupcakedb.firebaseapp.com",
  projectId: "fistfightcupcakedb",
  storageBucket: "fistfightcupcakedb.appspot.com",
  messagingSenderId: "140459626304",
  appId: "1:140459626304:web:a82f854aff03ed2714f4a5",
  measurementId: "G-M93K591BDR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
