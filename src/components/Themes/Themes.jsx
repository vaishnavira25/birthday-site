import React from "react";
import "./themes.css";

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
    img: theme1,
    title: "Boys Theme",
  },
  {
    img: theme2,
    title: "Girls Theme",
  },
  {
    img: theme3,
    title: "Customize Theme",
  },
  {
    img: theme4,
    title: "First Birthday Party",
  },
  {
    img: theme5,
    title: "Twins Theme Party",
  },
  {
    img: theme6,
    title: "New Born Theme",
  },
  {
    img: theme7,
    title: "Casino Theme Party",
  },
  {
    img: theme8,
    title: "Candy Land Theme Party",
  },
];

const Themes = () => {
  return (
    <section className="themes-section default-padding">

      {/* Heading */}
      <div className="section-heading">
        <h2>Themes</h2>
        <div className="heading-line"></div>
      </div>

      {/* Cards */}
      <div className="themes-container">

        {themesData.map((item, index) => (
          <div className="theme-card" key={index}>

            <div className="theme-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="theme-content">
              <h3>{item.title}</h3>
            </div>

          </div>
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