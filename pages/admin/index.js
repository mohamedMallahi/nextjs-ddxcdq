import Head from 'next/head';
import useRouter from 'next/router';

import getArticles from '../../utils/getArticles';
import { useAuth } from '../../contexts/AuthContext';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function Admin({ articles }) {
  const { user } = useAuth();
  const router = useRouter;

  if (!user) {
    return router.push('/signin');
  }

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
              <td>
                <Stack direction="horizontal" gap={2}>
                  <Badge bg="secondary">Ninja</Badge>
                  <Badge bg="secondary">Dragon Ball</Badge>
                </Stack>
              </td>
              <td>
                <Stack direction="horizontal" gap={2}>
                  <Button>Edit</Button>
                  <Button className="m">Delete</Button>
                </Stack>
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
