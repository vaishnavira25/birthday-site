import "./navbar.css";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpg";

export default function Mainnav() {
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
          placeholder="Search services..."
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