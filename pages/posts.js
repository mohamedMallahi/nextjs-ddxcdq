import Head from 'next/head';

export default function Posts({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}
