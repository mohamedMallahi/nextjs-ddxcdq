import Head from 'next/head';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import getArticles from '../utils/getArticles';

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome To NetBlogger! Start editing to see some magic happen :)"
        />
        <meta
          name="google-site-verification"
          content="WWRer6-6V5unAn3sfeiBZKwGroCeaADhXq09ePylNpk"
        />
      </Head>
      <Header
        title="NetBlogger"
        image="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=450"
        subtitle=" A minimalist blog site template"
      />
      <main className="container py-3 row">
        <div className="col-md-9">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
        <aside className="col-md-3">
          <div className="text-center border">
            <img
              src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
            <h3>Mohamed Mallahi</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              iure!
            </p>
          </div>
        </aside>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const articles = await getArticles();

  return {
    props: {
      articles: articles,
    },
  };
};
