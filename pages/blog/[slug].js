import Head from 'next/head';
import { createClient } from 'contentful';

export default function Blog({ article }) {
  const { title, thumbnail } = article.fields;
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome To NetBlogger! Start editing to see some magic happen :)"
        />
        <title>{title}</title>
      </Head>
      <article>
        {/* <h1>{article.title}</h1> */}
        {/* <p>{article.body}</p> */}
        <p>{article}</p>
      </article>
    </>
  );
}

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({
    content_type: 'posts',
    'fields.slug[in]': context.params.slug,
  });

  console.log(res.items[0]);
  return {
    props: {
      article: context.params.slug,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: 'posts' });
  const data = res.items;
  console.log();

  return {
    paths: data.map((post) => ({ params: { slug: post.fields.slug } })),
    fallback: false,
  };
}
