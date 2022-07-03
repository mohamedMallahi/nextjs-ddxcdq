import Link from 'next/link';

const BlogCard = ({ article }) => {
  return (
    <div className="card">
      {/* <DummyImage /> */}
      <img
        src="https://images.pexels.com/photos/12303803/pexels-photo-12303803.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt={article.title}
      />
      <div className="card-body">
        <h3 className="card-title">{article.title}</h3>
        <p className="card-text">
          Quia et suscipit\nsuscipit recusandae consequuntur expedita et
          cum\nreprehenderit molestiae
        </p>
        <Link href={`/blog/${article.id}`} className="btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

const DummyImage = () => (
  <svg
    className="bd-placeholder-img card-img-top"
    width="100%"
    height="180"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Placeholder: Image cap"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
  >
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
      Image cap
    </text>
  </svg>
);

export default BlogCard;
