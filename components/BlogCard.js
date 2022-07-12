import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogCard = ({ article }) => {
  const router = useRouter();

  return (
    <div className="card">
      <Image src={article.image} alt={article.title} width="250" height="200" />
      <div className="card-body">
        <h3 style={{ marginBottom: '0' }} className="card-title">
          {article.title}
        </h3>
        {/* <span style={{ fontSize: '13px', color: '#333' }}>
          {'Published in ' + new Date(createdAt).toDateString()}
        </span> */}
        <p className="card-text">
          Quia et suscipit\nsuscipit recusandae consequuntur expedita et
          cum\nreprehenderit molestiae
        </p>
        <button
          onClick={(e) => router.push(`/blog/${article.slug}`)}
          className="btn"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
