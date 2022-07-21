import Head from 'next/head';
import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Head>
        <title>NetBlogger | About Us</title>
      </Head>
      <Header
        title="About Us"
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <main className="container py-2">
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis
            sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
            consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            praesentium recusandae illo eaque architecto error, repellendus
            iusto reprehenderit, doloribus, minus sunt. Numquam at quae
            voluptatum in officia voluptas voluptatibus, minus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
            quae optio aperiam soluta voluptatibus corporis atque iste neque sit
            tempora!
          </p>
        </article>
      </main>
    </>
  );
};

export default About;
