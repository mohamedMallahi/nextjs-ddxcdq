import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCeHOUf47w6R_I3SHP1a0Toreft6-W7-sk',
  authDomain: 'netblogger-2bf9d.firebaseapp.com',
  databaseURL: 'https://netblogger-2bf9d-default-rtdb.firebaseio.com',
  projectId: 'netblogger-2bf9d',
  storageBucket: 'netblogger-2bf9d.appspot.com',
  messagingSenderId: '498861895944',
  appId: '1:498861895944:web:69161711aeab76b85f7cbd',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
