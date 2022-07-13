import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({ article }) {
  const router = useRouter();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.image} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          onClick={(e) => router.push(`/blog/${article.slug}`)}
          variant="primary"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
