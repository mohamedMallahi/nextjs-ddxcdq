import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div class="notfound">
        <h1>404</h1>
        <p>The page you searching for cannot be found!</p>
        <Link href="/">Go to homepage</Link>
      </div>
    </>
  );
};

export default NotFound;
