import Head from 'next/head';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import BlogCard from '../components/BlogCard';

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome To NetBlogger! Start editing to see some magic happen :)"
        />
        <meta
          name="google-site-verification"
          content="WWRer6-6V5unAn3sfeiBZKwGroCeaADhXq09ePylNpk"
        />
      </Head>
      <div className="banner">
        <h1>Welcome To NetBlogger!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <div className="articles">
        {articles.map((article) => (
          <BlogCard key={article.sys.id} article={article} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const colRef = await collection(db, 'articles');

  const snapshot = await getDocs(colRef);
  const articles = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return {
    props: {
      articles: articles,
    },
  };
};
