import Link from 'next/link';
import { useRouter } from 'next/router';
// import menuIcon from '../public/imgs/menu.png';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="navbar">
      <span className="navbar-brand">
        <Link href="/">NetBlogger</Link>
      </span>
      <ul className="navbar-menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button
            style={{ cursor: 'pointer' }}
            onClick={(e) => router.push('/signup')}
            className="btn-green"
          >
            Sign Up
          </button>
        </li>
      </ul>
      <div className="navbar-hamburger">
        <img src="/imgs/menu.png" />
      </div>
    </nav>
  );
};

export default Navbar;
