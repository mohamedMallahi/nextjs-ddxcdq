import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import menuIcon from '../assets/imgs/menu.png';

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
        <Image src={menuIcon} width="32" height="32" />
      </div>
    </nav>
  );
};

export default Navbar;
