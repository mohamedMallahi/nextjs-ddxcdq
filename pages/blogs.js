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
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}
