import "./games.css";

import airHockey from "../../assets/Games/air-hockey.webp";
import ballBucket from "../../assets/Games/ball-in-bucket-game.webp";
import jenga from "../../assets/Games/jenga-games.webp";
import vrgame from "../../assets/Games/virtual-xbox-game.webp";
import claw from "../../assets/Games/claw-machine.webp";
import tableTennis from "../../assets/Games/table-tennis.webp";
import snake from "../../assets/Games/snake-ladder.webp";
import balloon from "../../assets/Games/ballon-shoot.webp";

const games = [
  {
    title: "Air Hockey",
    image: airHockey,
    price: "2,999",
  },

  {
    title: "Ball In Bucket",
    image: ballBucket,
    price: "1,999",
  },

  {
    title: "Jenga Game",
    image: jenga,
    price: "2,499",
  },

  {
    title: "Virtual Game",
    image: vrgame,
    price: "4,999",
  },

  {
    title: "Claw Machine",
    image: claw,
    price: "3,499",
  },

  {
    title: "Table Tennis",
    image: tableTennis,
    price: "2,999",
  },

  {
    title: "Snake Ladder",
    image: snake,
    price: "1,499",
  },

  {
    title: "Balloon Shot",
    image: balloon,
    price: "1,999",
  },
];

const Games = () => {
  return (
    <section className="games-section default-padding">

      <div className="container">

        <div className="section-header">
          <span className="tag">Fun Activities</span>

          <h2>Games & Activities</h2>
        </div>

        <div className="games-grid">

          {games.map((item, index) => (
            <div className="game-card" key={index}>

              <div className="game-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="game-content">

                <div className="top-row">

                  <h3>{item.title}</h3>

                  <div className="stars">
                    ★★★★★
                  </div>

                </div>

                <div className="price-row">

                  <p className="price-text">
                    Starting From
                  </p>

                  <p className="price">
                    ₹{item.price}
                  </p>

                </div>

                <button className="book-btn">
                  Book Now
                </button>

              </div>
            </div>
          ))}

        </div>

        <div className="view-btn-wrap">
          <button className="view-btn">
            View All Games
          </button>
        </div>

      </div>

    </section>
  );
};

export default Games;