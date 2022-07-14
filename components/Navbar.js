import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavbarMenu = () => {
  const router = useRouter();

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NetBlogger</Navbar.Brand>
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
          <Link href="/signup" className="btn btn-success">
            Sign Up
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
