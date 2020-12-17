import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDwF0_ZqDRnlfKpRtwkXgQhqqVaWDl5XqY",
  authDomain: "crown-db-f4e9f.firebaseapp.com",
  databaseURL: "https://crown-db-f4e9f.firebaseio.com",
  projectId: "crown-db-f4e9f",
  storageBucket: "crown-db-f4e9f.appspot.com",
  messagingSenderId: "99114210456",
  appId: "1:99114210456:web:8a88104cd38d1d3476eced",
  measurementId: "G-GMWFN5RMN9"
};

firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;