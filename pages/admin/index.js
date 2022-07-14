import Head from 'next/head';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import getArticles from '../../utils/getArticles';

export default function Admin({ articles }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Published At</th>
            <th>Tags</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr>
              <td>{article.title}</td>
              <td>2022</td>
              <td>Ninja, Dragon Ball</td>
              <td>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export const getStaticProps = async () => {
  const articles = await getArticles();

  return {
    props: {
      articles: articles,
    },
  };
};
