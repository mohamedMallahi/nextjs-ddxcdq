import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({ article }) {
  const router = useRouter();
  return (
    <div className="card">
      <img src={article.image} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 class="card-title">{article.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          className="btn btn-primary"
          onClick={(e) => router.push(`/article/${article.slug}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
