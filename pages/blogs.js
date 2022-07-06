import Head from 'next/head';
import BlogCard from '../components/BlogCard';

export default function Blogs({ articles }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome To NetBlogger! Start editing to see some magic happen :)"
        />
      </Head>
      <div className="articles">
        {articles.map((article) => (
          <BlogCard key={article.sys.id} article={article} />
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
