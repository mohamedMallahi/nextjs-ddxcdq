import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async function addArticle(newArticle) {
  const colRef = await collection(db, 'articles');
  const docRef = await addDoc(colRef, { ...newArticle });
  console.log('Document written with ID: ', docRef.id);
}
