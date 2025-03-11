import { initializeAnalytics } from '@react-native-firebase/analytics';
import { initializeApp } from '@react-native-firebase/app';
import { collection, getFirestore } from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBtbetKfO77HmFjTee3h2fTBFCfG_NVAsc',
  authDomain: 'teedoproject.firebaseapp.com',
  projectId: 'teedoproject',
  storageBucket: 'teedoproject.firebasestorage.app',
  messagingSenderId: '580215880228',
  appId: '1:580215880228:web:5b74ba8528d370d2a976b1',
  measurementId: 'G-Z5WHP1SS89',
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
export const analytics = initializeAnalytics(app);
export const db = getFirestore(app);

export const productsRef = collection(db, 'products');
