import Link from 'next/link';
import { useRouter } from 'next/router';

function BlogCard({ article }) {
  const router = useRouter();
  return (
    <div class="article-card ">
      <img className="article-image" src={article.image} alt={article.title} />
      <div className="article-text">
        <Link href={`article/${article.slug}`}>
          <h2 class="post-title">{article.title}</h2>
        </Link>
        <h3 class="post-subtitle">
          A Chinese tale tells of some men sent to harm
        </h3>
        <p class="post-meta">
          Posted by
          <Link href="/">{article.author}</Link> on September 24, 2022
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
