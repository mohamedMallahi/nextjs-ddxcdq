import Head from 'next/head';
import BlogCard from '../components/BlogCard';

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome To NetBlogger! Start editing to see some magic happen :)"
        />
      </Head>
      <div className="banner">
        <h1>Welcome To NetBlogger!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <div className="articles">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};
