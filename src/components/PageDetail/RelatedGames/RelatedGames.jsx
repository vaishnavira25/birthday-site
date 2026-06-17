import { Link } from "react-router-dom";
import { gamesData } from "../../../data/gamesData";

export default function RelatedGames({ game }) {
  const relatedGames = gamesData.filter((item) =>
    game.relatedGames.includes(item.slug)
  );

  return (
    <section className="related-games-section">
      <div className="container">

        <div className="related-games-header">
          <h2>Explore More Games</h2>
        </div>

        <div className="related-games-grid">
          {relatedGames.map((item) => (
            <Link
              to={`/${item.slug}`}
              className="related-game-card"
              key={item.id}
            >
              <div className="related-game-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="related-game-content">
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}