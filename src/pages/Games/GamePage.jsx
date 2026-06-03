import { useState } from "react";

import "./GamePage.css";

import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import banner from "../../assets/banner/games-&-activity-banner.png";
import { gamesData } from "../../data/gamesData";
import { activitiesData } from "../../data/activitiesData";

export default function GamePage() {
  const [activeTab, setActiveTab] = useState("games");

  const currentData =
    activeTab === "games"
      ? gamesData
      : activitiesData;

  return (
    <>
      <Navbar />

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
              activations.
            </p>

          </div>

          {/* TABS */}

          <div className="games-tabs">

            <button
              className={
                activeTab === "games"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("games")
              }
            >
              🎮 All Games
            </button>

            <button
              className={
                activeTab === "activities"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("activities")
              }
            >
              🎯 Activities
            </button>

          </div>

          {/* COUNT */}

          <div className="games-count">

            Showing{" "}
            {currentData.length}{" "}

            {activeTab === "games"
              ? "Games"
              : "Activities"}

          </div>

          {/* GRID */}

          <div className="games-grid">

            {currentData.map((item) => (

              <Cards
                key={item.id}
                item={item}
              />

            ))}

          </div>

        </div>

      </section>
    </>
  );
}