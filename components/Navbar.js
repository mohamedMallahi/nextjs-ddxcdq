import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavbarMenu = () => {
  const { user, signout } = useAuth();
  const router = useRouter();

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <Link href="/">
          <Navbar.Brand className="text-warning">NetBlogger</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/articles">
              <a className="nav-link">Articles</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </Nav>
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
        </Navbar.Collapse>
      </div>
    </nav>
  );
};

export default NavbarMenu;
