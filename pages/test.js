// comp
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '../components/AdminLayout';

const Test = () => {
  return (
    <>
      <Head>
        <title>NetBlogger | Contact Us</title>
      </Head>
      <div className="container-sign">
        <h1>tetst</h1>
      </div>
    </>
  );
};

Test.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Test;
