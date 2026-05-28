import "./navbar.css";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import logo from "../../assets/logo.jpg";

export default function Mainnav() {

  const placeholders = [
    "Search cocomelon theme...",
    "Search jungle theme...",
    "Search air hockey...",
    "Search bouncy...",
    "Search pool party...",
    "Search caricature artist...",
    "Search tattoo artist...",
    "Search carnival games..."
  ];

  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {

    let currentText = 0;

    let currentChar = 0;

    let isDeleting = false;

    const typeEffect = () => {

      const fullText = placeholders[currentText];

      if (!isDeleting) {

        setPlaceholder(
          fullText.substring(0, currentChar + 1)
        );

        currentChar++;

        if (currentChar === fullText.length) {

          isDeleting = true;

          setTimeout(typeEffect, 1200);

          return;
        }

      } else {

        setPlaceholder(
          fullText.substring(0, currentChar - 1)
        );

        currentChar--;

        if (currentChar === 0) {

          isDeleting = false;

          currentText =
            (currentText + 1) % placeholders.length;
        }

      }

      setTimeout(typeEffect, isDeleting ? 40 : 90);

    };

    typeEffect();

  }, []);

  return (

    <div className="mainnav">

      {/* LOGO */}

      <div className="logo">

        <Link to="/">

          <img
            src={logo}
            alt="Logo"
          />

        </Link>

      </div>

      {/* SEARCH */}

      <div className="search-box">

        <input
          type="text"
          placeholder={placeholder}
        />

      </div>

      {/* MENU */}

      <ul className="menu">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/games-activity-for-event">
            Games & Activity
          </Link>
        </li>

        <li>
          <Link to="/themes">
            Themes
          </Link>
        </li>

        <li>
          <Link to="/services">
            Services
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact Us
          </Link>
        </li>

        <li>
          <Link to="/explore">
            Explore
          </Link>
        </li>

      </ul>

    </div>
  );
}