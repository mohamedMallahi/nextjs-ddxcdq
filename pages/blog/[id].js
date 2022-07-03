import Head from 'next/head';
import { createClient } from 'contentful';

export default function Blogs({ article }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome To NetBlogger! Start editing to see some magic happen :)"
        />
        <title>{article.title}</title>
      </Head>
      <article>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${context.params.id}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      article: data,
    },
  };
}

export async function getStaticPath() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: 'posts' });
  const posts = res.items;
  posts.map(post => ({params: {slug}}))

  return {
    paths: [data.map((post) => ({ params: { id: post.id } }))],
    fallback: false,
  };
}
