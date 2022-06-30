import Head from 'next/head';

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
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    paths: [data.map((post) => ({ params: { id: post.id } }))],
    fallback: false,
  };
}
