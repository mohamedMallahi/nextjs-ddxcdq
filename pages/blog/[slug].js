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
        {/* <title>{article.title}</title> */}
      </Head>
      <article>
        {/* <h1>{article.title}</h1> */}
        {/* <p>{article.body}</p> */}
        <p>{article}</p>
      </article>
    </>
  );
}

export async function getServerSideProps(context) {
  // const res = await fetch(
  //   `http://jsonplaceholder.typicode.com/posts/${context.params.slug}`,
  //   {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //     },
  //   }
  // );
  // const data = await res.json();
  // console.log(data);

  return {
    props: {
      article: context.params.slug,
    },
  };
}

export async function getStaticPath() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: 'posts' });
  const data = res.items;

  return {
    paths: [data.map((post) => ({ params: { slug: post.fields.id } }))],
    fallback: false,
  };
}
