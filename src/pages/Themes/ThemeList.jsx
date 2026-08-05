import { useLocation } from "react-router-dom";

import "./ThemeList.css";

import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";

import { boysThemeData } from "../../data/themesData/boysThemeData";
import { girlsThemeData } from "../../data/themesData/girlsThemeData";
import { customizedThemeData } from "../../data/themesData/customizedThemeData";

export default function ThemeList() {

  const location = useLocation();

  let data = [];
  let title = "";
  let description = "";
  let banner = "";

  /* ================================
     BOYS THEMES
  ================================= */

  if (location.pathname === "/boys-theme-party-delhi") {
    data = boysThemeData;

    title = "Boys Theme Party Delhi";

    description =
      "Creative and exciting birthday themes for boys.";

    // banner = boysBanner;
  }

  /* ================================
     GIRLS THEMES
  ================================= */

  else if (location.pathname === "/girls-theme-party-delhi") {
    data = girlsThemeData;

    title = "Girls Theme Party Delhi";

    description =
      "Beautiful and fun birthday themes for girls.";

    // banner = girlsBanner;
  }

  /* ================================
     CUSTOMIZED THEMES
  ================================= */

  else if (
    location.pathname === "/customized-theme-party-planner"
  ) {
    data = customizedThemeData;

    title = "Customized Theme Party Planner";

    description =
      "Personalized birthday party themes designed for your celebration.";

    // banner = customizedBanner;
  }

  return (
    <>
      <Navbar />

      <section className="theme-list-page">

        {/* HERO */}

        <div className="theme-list-hero">

          {banner && (
            <img
              src={banner}
              alt={title}
            />
          )}

          <div className="theme-list-overlay">

            <h1>{title}</h1>

            <p>{description}</p>

          </div>

        </div>


        {/* CONTENT */}

        <div className="theme-list-container">

          <div className="theme-list-content">

            <h2>{title}</h2>

            <p>{description}</p>

          </div>


          {/* COUNT */}

          <div className="theme-list-count">

            Showing {data.length} Themes

          </div>


          {/* GRID */}

          <div className="theme-list-grid">

            {data.map((item) => (

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