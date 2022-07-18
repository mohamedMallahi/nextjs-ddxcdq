import Head from 'next/head';
import { AuthProvider } from '../contexts/AuthContext';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/styles.scss';

function Layout({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>NetBlogger</title>
      </Head>
      <Navbar />
      <main className="container py-3">
        <Component {...pageProps} />
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default Layout;
