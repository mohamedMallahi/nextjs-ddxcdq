import Link from 'next/link';
import styles from '../styles/Admin.module.css';

const AdminLayout = ({ children }) => {
  const handleSidebarToggle = () => {
    document.body.classList.toggle('sb-sidenav-toggled');
  };

  return (
    <div className={`${styles.wrapper} d-flex`}>
      <div
        className={`sidebarWrapper ${styles.sidebarWrapper} border-end bg-primary`}
      >
        <div
          className={`${styles.sidebarHeading} border-bottom bg-primar text-light`}
        >
          NetBlogger
        </div>
        <div className="list-group list-group-flush">
          <Link href="/admin/new-article">
            <a className="list-group-item list-group-item-action bg-primary text-light p-3">
              New Article
            </a>
          </Link>
          <Link href="/admin">
            <a className="list-group-item list-group-item-action bg-primary text-light p-3">
              Dashboard
            </a>
          </Link>
          <a
            className="list-group-item list-group-item-action bg-primary text-light p-3"
            href="#!"
          >
            Overview
          </a>
        </div>
      </div>

      <div className={styles.pageContentWrapper}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <button className="btn btn-primary" onClick={handleSidebarToggle}>
              Toggle Menu
            </button>
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
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item text-dark">
                  <a className="nav-link" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#!">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid py-2">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
