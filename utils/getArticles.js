import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async function getArticles() {
  const colRef = await collection(db, 'articles');

  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}