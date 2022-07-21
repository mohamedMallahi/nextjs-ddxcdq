import Head from 'next/head';
import { AuthProvider } from '../contexts/AuthContext';

import Navbarr from '../components/Navbarr';
import Footer from '../components/Footer';
import '../styles/styles.scss';

function Layout({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <AuthProvider>
        {Component.getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <Head>
        <title>NetBlogger</title>
      </Head>
      <Navbarr />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default Layout;
