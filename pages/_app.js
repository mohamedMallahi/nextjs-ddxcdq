import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import '../styles/styles.scss';

function Layout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NetBlogger</title>
      </Head>
      <Navbar />
      <Container className="py-3">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
