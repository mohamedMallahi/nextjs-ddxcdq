const Header = () => {
  return (
    <header
      className="masthead"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=620')",
      }}
    >
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
              <h1>NetBlogger</h1>
              <span className="subheading">
                A Blog Theme by Start Bootstrap
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
