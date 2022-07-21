import Head from 'next/head';
import BlogCard from '../components/BlogCard';
import getArticles from '../utils/getArticles';

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
      <div className="container">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const articles = await getArticles();

  return {
    props: {
      articles: articles,
    },
  };
};
