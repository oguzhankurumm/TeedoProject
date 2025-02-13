import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBtbetKfO77HmFjTee3h2fTBFCfG_NVAsc',
  authDomain: 'teedoproject.firebaseapp.com',
  projectId: 'teedoproject',
  storageBucket: 'teedoproject.firebasestorage.app',
  messagingSenderId: '580215880228',
  appId: '1:580215880228:web:5b74ba8528d370d2a976b1',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const productsRef = collection(db, 'products');
