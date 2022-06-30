import BlogCard from '../components/BlogCard';

export default function Blogs({ articles }) {
  return (
    <>
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
