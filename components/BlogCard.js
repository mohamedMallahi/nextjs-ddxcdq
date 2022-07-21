import { useRouter } from 'next/router';

function BlogCard({ article }) {
  const router = useRouter();
  return (
    <div class="article-card ">
      <img className="article-image" src={article.image} alt={article.title} />
      <div className="article-text">
        <a href="#">
          <h2 class="post-title">{article.title}</h2>
          <h3 class="post-subtitle">{article.subtitle}</h3>
        </a>
        <p class="post-meta">
          Posted by
          <a href="#!">Start Bootstrap</a> on September 24, 2022
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
