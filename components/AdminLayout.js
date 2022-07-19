import styles from '../styles/Admin.module.css';

const AdminLayout = ({ children }) => {
  const handleSidebarToggle = () => {
    document.body.classList.toggle('sb-sidenav-toggled');
  };

  return (
    <div className={`${styles.wrapper} d-flex`}>
      <div
        className={`sidebarWrapper ${styles.sidebarWrapper} border-end bg-white`}
      >
        <div class={`${styles.sidebarHeading} border-bottom bg-light`}>
          NetBlogger
        </div>
        <div class="list-group list-group-flush">
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Dashboard
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Shortcuts
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Overview
          </a>
        </div>
      </div>

      <div className={styles.pageContentWrapper}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div class="container-fluid">
            <button class="btn btn-primary" onClick={handleSidebarToggle}>
              Toggle Menu
            </button>
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
              <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#!">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container-fluid">
          <h1 class="mt-4">Simple Sidebar</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
