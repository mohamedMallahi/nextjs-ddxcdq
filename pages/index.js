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
        {articles.splice(20, 70).map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=9'
  );
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};
