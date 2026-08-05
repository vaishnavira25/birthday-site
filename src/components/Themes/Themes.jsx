import React from "react";
import "./Themes.css";

import Cards from "../../components/Cards/Cards";

import theme1 from "../../assets/themes/boys-theme.webp";
import theme2 from "../../assets/themes/girls-theme.webp";
import theme3 from "../../assets/themes/customize-theme.webp";
import theme4 from "../../assets/themes/first-birthday-theme.webp";
import theme5 from "../../assets/themes/twins-theme.webp";
import theme6 from "../../assets/themes/new-born-theme.webp";
import theme7 from "../../assets/themes/casino-theme.webp";
import theme8 from "../../assets/themes/candy-land-theme.webp";

const themesData = [
  {
    image: theme1,
    badge: "Popular",
    title: "Boys Theme",
    slug: "boys-theme",
    price: "4,999",
  },
  {
    image: theme2,
    badge: "Trending",
    title: "Girls Theme",
    slug: "girls-theme",
    price: "5,999",
  },
  {
    image: theme3,
    badge: "",
    title: "Customize Theme",
    slug: "customize-theme",
    price: "6,999",
  },
  {
    image: theme4,
    badge: "",
    title: "First Birthday Party",
    slug: "first-birthday-party",
    price: "7,999",
  },
  {
    image: theme5,
    badge: "",
    title: "Twins Theme Party",
    slug: "twins-theme-party",
    price: "8,999",
  },
  {
    image: theme6,
    badge: "Best Seller",
    title: "New Born Theme",
    slug: "new-born-theme",
    price: "5,499",
  },
  {
    image: theme7,
    title: "Casino Theme Party",
    slug: "casino-theme-party",
    price: "12,999",
  },
  {
    image: theme8,
    title: "Candy Land Theme",
    slug: "candy-land-theme-party",
    price: "9,999",
  },
];

const Themes = () => {
  return (
    <section className="themes-section default-padding">

      {/* Heading */}
      <div className="section-header">

        <span className="tag">
          Themes
        </span>

        <h2>
          Make Every Celebration More Magical
        </h2>

      </div>

      {/* Cards */}
      <div className="themes-container">

        {themesData.map((item, index) => (
          <Cards
            key={index}
            item={item}
          />
        ))}

      </div>

      {/* Button */}
      <div className="theme-btn-wrapper">

        <button className="theme-btn">
          View All Themes
        </button>

      </div>

    </section>
  );
};

export default Themes;