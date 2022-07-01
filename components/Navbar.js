import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <span>
        <Link href="/">NetBlogger</Link>
      </span>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
