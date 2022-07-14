import Head from 'next/head';
import { AuthProvider } from '../contexts/AuthContext';

// Custome Comp
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import '../styles/styles.scss';

function Layout({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>NetBlogger</title>
      </Head>
      <Navbar />
      <Container className="py-3">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </AuthProvider>
  );
}

export default Layout;
