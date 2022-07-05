import Head from 'next/head';
import { createClient } from 'contentful';

export default function Blog({ article }) {
  const { title, thumbnail, body } = article.fields;
  const { createdAt } = article.sys;
  console.log(article);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto eius obcaecati sunt consequuntur similique at."
        />
        <title>{title}</title>
      </Head>
      <article>
        <h1 style={{ marginBottom: '0' }}>{title}</h1>
        <span style={{ fontSize: '13px', color: '#333' }}>
          {'Published in ' + new Date(createdAt).toDateString()}
        </span>
        {/* <p>{article.body}</p>
        {/* <p>{article}</p> */}
        {body.content.map((node) => {
          if (node.nodeType === 'paragraph') {
            return (
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                dolores sapiente officiis harum quaerat debitis at adipisci
                quisquam exercitationem iste nesciunt culpa, eos ad cupiditate
                iusto asperiores dolor. Illum quos nemo id distinctio a dolore
                fugit nihil reprehenderit in voluptatem quis quasi modi nisi
                nesciunt laboriosam soluta facere impedit non, quaerat iure.
              </p>
            );
          }
        })}
      </article>
    </>
  );
}

export async function getStaticProps(context) {
  const client = await createClient({
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
      article: res.items[0],
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
