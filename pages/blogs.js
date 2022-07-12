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
      <div className="articles">
        {/* {articles.map((article) => (
          <BlogCard key={article.sys.id} article={article} />
        ))} */}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const colRef = await collection(db, 'messages');

  const snapshot = await getDocs(colRef);
  const posts = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return {
    props: {
      articles: posts,
    },
  };
};
