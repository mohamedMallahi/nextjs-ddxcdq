import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

import styles from '../styles/Navbar.module.scss';

const Navbarr = () => {
  const { user, signout } = useAuth();
  const router = useRouter();

  return (
    <nav class={` ${styles.navbar} navbar navbar-expand-lg navbar-dark`}>
      <div class="container px-4 px-lg-5">
        <Link href="/">
          <a class="navbar-brand">NetBlogger</a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto py-4 py-lg-0">
            <li class="nav-item">
              <Link href="/">
                <a class="nav-link px-lg-3 py-3 py-lg-4">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/about">
                <a class="nav-link px-lg-3 py-3 py-lg-4">About</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contact">
                <a class="nav-link px-lg-3 py-3 py-lg-4">Contact</a>
              </Link>
            </li>
          </ul>
          {user ? (
            <>
              <Link href="/admin">
                <a className="btn btn-info  me-2">Admin</a>
              </Link>
              <button onClick={(e) => signout()} className="btn btn-danger">
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={(e) => router.push('/signup')}
              className="btn btn-success"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
