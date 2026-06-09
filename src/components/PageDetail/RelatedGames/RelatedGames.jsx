import { Link } from "react-router-dom";

import { gamesData } from "../../../data/gamesData";

export default function RelatedGames({ slug }) {
  return (
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
  );
}