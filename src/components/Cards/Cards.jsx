import { Link } from "react-router-dom";
import "./Cards.css"

const Cards = ({ item }) => {
  return (
    <Link to={`/${item.slug}`}>

      <div className="game-image">

        <img
          src={item.image}
          alt={item.title}
        />

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

    </Link>
  );
};

export default Cards;