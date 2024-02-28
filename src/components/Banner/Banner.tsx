import Image from 'next/image';
import './Banner.css';

const Banner = () => {
  const Article = () => {
    return (
      <article className="article">
        <div className="article__image">
          <h2>Titulo</h2>
          <img
            src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // width={500}
            // height={500}
            alt="as"
          />
        </div>
      </article>
    );
  };

  return (
    <section className="banner">
      <div className="feed">
        <div className="column">
          <Article />
        </div>
        <div className="column">
          <Article />
          <Article />
          <Article />
          {/* <div className="row">
          </div>
          <div className="row">
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
