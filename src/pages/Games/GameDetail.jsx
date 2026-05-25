import "./GameDetail.css";

import { useParams, Link } from "react-router-dom";

import { gamesDetailData } from "../../data/gamesDetailData";

import{ gamesData } from "../../data/gamesData";

export default function GameDetail() {

  const { slug } = useParams();

const game = gamesDetailData.find(
  (item) => item.slug === slug
);

  if (!game) {
    return <h1>Game Not Found</h1>;
  }

  return (
    <section className="game-detail-page">

      {/* HERO */}

      <div className="detail-hero">

        <img
          src={game.banner}
          alt={game.title}
        />

        <div className="detail-overlay">

          <h1>{game.title}</h1>

        </div>

      </div>

      {/* BREADCRUMB */}

      <div className="breadcrumb-wrap">

        <div className="container">

          <div className="breadcrumb">

            <Link to="/">
              Home
            </Link>

            <span>/</span>

            <Link to="/games-activity-for-event">
              Games
            </Link>

            <span>/</span>

            <p>{game.title}</p>

          </div>

        </div>

      </div>

      {/* SECTION 1 */}

      <div className="container">

        <div className="detail-row">

          <div className="detail-text">

            <span className="tag">
              Fun Activity
            </span>

            <h2>{game.title}</h2>

            <p>
              {game.description}
            </p>

          </div>

          <div className="detail-image">

            <img
              src={game.image1}
              alt={game.title}
            />

          </div>

        </div>

        {/* SECTION 2 */}

        <div className="detail-row reverse">

          <div className="detail-image">

            <img
              src={game.image2}
              alt={game.title}
            />

          </div>

          <div className="detail-text">

            <span className="tag">
              Event Entertainment
            </span>

            <h2>
              Perfect For Every Event
            </h2>

            <p>
              Our exciting game setup creates
              fun and engagement for birthdays,
              school events, mall activations,
              weddings, and corporate parties.
            </p>

          </div>

        </div>

      </div>

      {/* GALLERY */}

      <section className="gallery-section">

        <div className="container">

          <div className="section-header">

            <h2>Gallery</h2>

          </div>

          <div className="gallery-grid">

            <div className="gallery-item big">
              <img src={game.gallery1} alt="" />
            </div>

            <div className="gallery-item">
              <img src={game.gallery2} alt="" />
            </div>

            <div className="gallery-item">
              <img src={game.gallery3} alt="" />
            </div>

            <div className="gallery-item wide">
              <img src={game.gallery4} alt="" />
            </div>

          </div>

        </div>

      </section>

      {/* FAQ + VIDEO */}

      <section className="faq-video-section">

        <div className="container">

          <div className="faq-video-wrap">

            {/* FAQ */}

            <div className="faq-box">

              <h2>Frequently Asked Questions</h2>

              {game.faqs.map((faq, index) => (

                <div
                  className="faq-item"
                  key={index}
                >

                  <h4>
                    {faq.question}
                  </h4>

                  <p>
                    {faq.answer}
                  </p>

                </div>

              ))}

            </div>

            {/* VIDEO */}

            <div className="video-box">

              <iframe
                width="100%"
                height="400"
                src={game.video}
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>

      {/* RELATED GAMES */}

      <section className="related-games">

        <div className="container">

          <div className="section-header">

            <h2>
              Explore More Games
            </h2>

          </div>

          <div className="games-grid">

            {gamesData
              .filter(
                (item) => item.slug !== slug
              )
              .slice(0, 4)
              .map((item) => (

                <Link
                  to={`/${item.slug}`}
                  className="game-card"
                  key={item.id}
                >

                  <div className="game-image">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                  </div>

                  <div className="game-content">

                    <h3>{item.title}</h3>

                  </div>

                </Link>

              ))}

          </div>

        </div>

      </section>

    </section>
  );
}