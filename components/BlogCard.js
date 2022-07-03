import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ article }) => {
  const { title, slug, thumbnail } = article.fields;
  const { createdAt } = article.sys;
  console.log(article);
  return (
    <div className="card">
      {/* <DummyImage /> */}
      <Image
        src={'https:' + thumbnail.fields.file.url}
        alt={article.title}
        width="400"
        height="300"
      />
      <div className="card-body">
        <h3 style={{ marginBottom: '0' }} className="card-title">
          {title}
        </h3>
        <span style={{ fontSize: '13px', color: '#333' }}>
          {'Published in ' + new Date(createdAt).toDateString()}
        </span>
        <p className="card-text">
          Quia et suscipit\nsuscipit recusandae consequuntur expedita et
          cum\nreprehenderit molestiae
        </p>
        <Link href={`/blog/${slug}`} className="btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
