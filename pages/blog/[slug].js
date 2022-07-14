import Head from 'next/head';
import Image from 'next/image';
import { db } from '../../config/firebase';
import { collection, doc, setDoc } from "firebase/firestore"; 


export default function BlogPost() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto eius obcaecati sunt consequuntur similique at."
        />
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <span style={{ fontSize: '13px', color: '#333' }}>
          {'Published in ' + new Date(createdAt).toDateString()}
        </span>
        <div className="image-container">
          <Image
            className="image"
            src={'https:' + thumbnail.fields.file.url}
            alt={thumbnail.fields.title}
            layout="fill"
          />
        </div>
        {articleComponent}
      </article>
    </>
  );
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const colRef = await collection(db, 'articles');

  const snapshot = await getDocs(colRef);
  const articles = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  console.logarticles.filter((article) => article.slug === slug);
};
