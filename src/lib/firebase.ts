import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  getDocs 
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Use named database ID if specified in config
export const db = firebaseConfig.firestoreDatabaseId 
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const OWNER_EMAIL = 'ratangup386@gmail.com';

// Firestore collections and helpers
export async function getStoredProjectsFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    if (querySnapshot.empty) return null;
    const projectsList: any[] = [];
    querySnapshot.forEach((docSnap) => {
      projectsList.push(docSnap.data());
    });
    return projectsList;
  } catch (err) {
    console.error('Error reading projects from Firestore:', err);
    return null;
  }
}

export async function saveProjectsToFirestore(projects: any[]) {
  try {
    for (const project of projects) {
      await setDoc(doc(db, 'projects', project.id), project, { merge: true });
    }
  } catch (err) {
    console.error('Error saving projects to Firestore:', err);
    throw err;
  }
}

export async function getProfileFromFirestore() {
  try {
    const docSnap = await getDoc(doc(db, 'profile', 'main'));
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (err) {
    console.error('Error reading profile from Firestore:', err);
    return null;
  }
}

export async function saveProfileToFirestore(profileData: { profileImage?: string }) {
  try {
    await setDoc(doc(db, 'profile', 'main'), profileData, { merge: true });
  } catch (err) {
    console.error('Error saving profile to Firestore:', err);
    throw err;
  }
}

export {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
};
