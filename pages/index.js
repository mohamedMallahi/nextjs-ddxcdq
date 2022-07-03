import Head from 'next/head';
import { createClient } from 'contentful';
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
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: 'posts' });

  return {
    props: {
      articles: res.items,
    },
  };
};
