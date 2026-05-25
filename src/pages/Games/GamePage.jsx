import "./GamePage.css";
import "../../components/Cards/Cards.css";

import banner from "../../assets/banner/games-&-activity-banner.png";

import { gamesData } from "../../data/gamesData";

import Cards from "../../components/Cards/Cards";

export default function GamePage() {
  return (
    <section className="games-page">

      {/* HERO */}

      <div className="games-hero">

        <img
          src={banner}
          alt="Games Banner"
        />

        <div className="games-overlay">

          <h1>
            Games & Activities On Rent
          </h1>

          <p>
            Fun activities and entertainment
            games for birthdays, corporate
            events, carnivals, school events,
            weddings, and celebrations.
          </p>

        </div>

      </div>

      {/* CONTENT */}

      <div className="games-container">

        <div className="games-content">

          <h2>
            Games and Activities Rental
          </h2>

          <p>
            We provide exciting games and
            activities for birthday parties,
            school events, corporate
            functions, carnivals, and mall
            activations. Our collection
            includes arcade games, carnival
            games, fun activities, and kids
            entertainment setups.
          </p>

        </div>

        {/* GRID */}

        <div className="games-grid">

          {gamesData.map((item) => (
            <Cards
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}