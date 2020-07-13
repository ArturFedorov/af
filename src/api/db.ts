import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../../firebase.config';

// Get a Firestore instance
export const db = firebase.initializeApp(firebaseConfig).firestore();
