import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, signout } = useAuth();
  const router = useRouter();

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">NetBlogger</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>{' '}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/articles">
              <a className="nav-link">Articles</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </ul>
          {user ? (
            <>
              <Link href="/admin">
                <a className="btn btn-info">Admin</a>
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

export default Navbar;
