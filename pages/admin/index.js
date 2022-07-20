import Head from 'next/head';
import ProtectedRoute from '../../components/ProtectedRoute';
import getArticles from '../../utils/getArticles';
import AdminLayout from '../../components/AdminLayout';

export default function Admin({ articles }) {
  return (
    <ProtectedRoute>
      <Head>
        <meta name="robots" content="noindex" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <table className="table table-hover">
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
                <div clasName="d-flex">
                  <span className="badge bg-secondary">Ninja</span>
                  <span className="badge bg-secondary">Dragon Ball</span>
                </div>
              </td>
              <td>
                <div clasName="d-flex">
                  <button className="btn btn-info">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ProtectedRoute>
  );
}

Admin.getLayout = (page) => {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const articles = await getArticles();

  return {
    props: {
      articles: articles,
    },
  };
};
