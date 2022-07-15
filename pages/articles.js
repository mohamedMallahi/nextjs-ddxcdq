import Head from 'next/head';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import BlogCard from '../components/BlogCard';

export default function Blogs({ articles }) {
  console.log(articles);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome To NetBlogger! Start editing to see some magic happen :)"
        />
      </Head>
      <div className="d-flex align-items-center justify-content-between flex-md-column">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
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
