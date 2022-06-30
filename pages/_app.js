import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

function Layout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NetBlogger</title>
      </Head>
      <Navbar />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
