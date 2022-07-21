import Head from 'next/head';
import Image from 'next/image';
import { db } from '../../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import parse from 'html-react-parser';

export default function Article({ article }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto eius obcaecati sunt consequuntur similique at."
        />
        <title>{article.title}</title>
      </Head>
      <article>
        <h1>{article.title}</h1>
        {/* <span style={{ fontSize: '13px', color: '#333' }}>
          {'Published in ' + new Date(createdAt).toDateString()}
        </span> */}
        <div className="image-container">
          <Image
            className="image"
            src={article.image}
            alt={article.title}
            layout="fill"
          />
        </div>
        <p>{parse(article.body)}</p>
      </article>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const articlesRef = await collection(db, 'articles');
  const q = query(articlesRef, where('slug', '==', slug));
  const querySnapshot = await getDocs(q);

  const articles = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return {
    props: {
      article: articles[0],
    },
  };
}

export async function getStaticPaths() {
  const colRef = await collection(db, 'articles');

  const snapshot = await getDocs(colRef);
  const paths = snapshot.docs.map((doc) => {
    return {
      params: {
        slug: doc.data().slug,
      },
    };
  });

  return {
    paths: [...paths],
    fallback: false,
  };
}
