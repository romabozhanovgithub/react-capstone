import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc, // get a document instance
    getDoc, // get document data
    setDoc, // set document data
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA8cTqFyH8FtTHHLUPZNRtvojFYrMK86S8",
    authDomain: "react-capstone-778d4.firebaseapp.com",
    projectId: "react-capstone-778d4",
    storageBucket: "react-capstone-778d4.appspot.com",
    messagingSenderId: "1080633596434",
    appId: "1:1080633596434:web:600f3a1181757dfdb7d6cb",
    measurementId: "G-FPFYV24CWF"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid); // db is the firestore instance, 'users' is the collection name, userAuth.uid is the document id
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userDocRef;
};
