import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, signout } = useAuth();
  const router = useRouter();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <Link href="/">
          <a class="navbar-brand">NetBlogger</a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href="/">
                <a class="nav-link" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/articles">
                <a class="nav-link" aria-current="page">
                  Articles
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contact">
                <a class="nav-link" aria-current="page">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
