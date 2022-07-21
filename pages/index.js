import Head from 'next/head';
import Header from '../components/Header';
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
      <Header
        title="NetBlogger"
        image="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=450"
        subtitle=" A Blog Theme by Start Bootstrap"
      />
      <main className="container py-3">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </main>
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
