import Head from 'next/head';
import Image from 'next/image';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Skeleton from '../../components/Skeleton';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Blog({ article }) {
  const { title, thumbnail, body } = article.fields;
  const { createdAt } = article.sys;
  const articleComponent = documentToReactComponents(body);

  if (!article) {
    return <Skeleton />;
  }

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
        <div className={'image-container'}>
          <Image
            className="image"
            src={'https:' + thumbnail.fields.file.url}
            alt={thumbnail.fields.title}
            layout="fill"
          />
        </div>
        {articleComponent}
      </article>
    </>
  );
}

export async function getStaticProps(context) {
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
  const res = await client.getEntries({ content_type: 'posts' });
  const data = res.items;
  console.log();

  return {
    paths: data.map((post) => ({ params: { slug: post.fields.slug } })),
    fallback: true,
  };
}
