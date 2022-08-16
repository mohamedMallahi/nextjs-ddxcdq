import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

// import styles from '../styles/Navbar.module.scss';

const Navbarr = () => {
  const { user, signout } = useAuth();
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container px-4 px-lg-5">
        <Link href="/">
          <a className="navbar-brand">NetBlogger</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link px-lg-3 py-3 py-lg-4">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link px-lg-3 py-3 py-lg-4">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link px-lg-3 py-3 py-lg-4">Contact</a>
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
