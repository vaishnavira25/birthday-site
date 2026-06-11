import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./Cards.css";

const Cards = ({ item }) => {
  return (
    <Link to={`/${item.slug}/`} className="card">

      {/* IMAGE */}

      <div className="card-image">

        <img
          src={item.image}
          alt={item.title}
        />

        {/* Overlay */}

        <div className="card-overlay"></div>

        {/* Badge */}

        {item.badge && (
          <span className="card-badge">
            {item.badge}
          </span>
        )}

      </div>

      {/* CONTENT */}

      <div className="card-content">

        {/* TITLE */}

        <h3 className="card-title">
          {item.title}
        </h3>

        {/* REVIEWS */}

        <div className="card-review">

          <div className="card-stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <span>(120 Reviews)</span>

        </div>

        {/* PRICE */}

        <div className="card-price-row">

          <div>
            <p className="card-price-label">
              Starts at
            </p>

            <h4 className="card-price">
              ₹{item.price}
            </h4>
          </div>

        </div>

        {/* BUTTON */}

        <button className="card-btn">
          Book Now
        </button>

      </div>

    </Link>
  );
};

export default Cards;